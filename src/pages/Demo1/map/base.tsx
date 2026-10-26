import { use, useLayoutEffect, useMemo, useRef } from "react";
import { useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import {
  Box2,
  LineSegments,
  Mesh,
  Path,
  RepeatWrapping,
  Shape,
  Vector2,
  type Group,
} from "three";
import { geoMercator } from "d3-geo";
import type { CityGeoJSON } from "@/types/map";
import City, { type CityProps } from "./city";
import ShapeMesh from "./shape";
import loadTexture from "../helpers/loadTexture";
import { useConfigStore } from "../stores";

import map from "@/assets/shenzhen_map.png";
import normalMap from "@/assets/sc_normal_map.png";
import Heatmap from "./heatmap";

export interface BaseProps {
  depth?: number;
  data: CityGeoJSON;
  outlineData?: CityGeoJSON;
}

const shenzhenProjectionScale = 8000;
const mapTargetSize = { width: 190, height: 170 };

const textures = Promise.all([
  loadTexture(map, (tex) => {
    tex.wrapS = tex.wrapT = RepeatWrapping;
  }),
  loadTexture(normalMap, (tex) => {
    tex.wrapS = tex.wrapT = RepeatWrapping;
  }),
]);

export default function Base(props: BaseProps) {
  const { data, outlineData, depth = 6 } = props;
  const groupRef = useRef<Group>(null!);
  const camera = useThree((state) => state.camera);

  const [texture1, texture2] = use(textures);

  const projection = useMemo(() => {
    const center =
      outlineData?.features[0]?.properties.centroid ??
      data.features[0].properties.centroid;

    const baseProjection = geoMercator().center(center).scale(1).translate([0, 0]);
    const baseBbox = new Box2();
    outlineData?.features.forEach((feature) => {
      feature.geometry.coordinates.forEach((polygon) => {
        polygon.forEach((ring) => {
          ring.forEach((coord) => {
            const [x, y] = baseProjection(coord as [number, number])!;
            baseBbox.expandByPoint(new Vector2(x, -y));
          });
        });
      });
    });

    const width = baseBbox.max.x - baseBbox.min.x;
    const height = baseBbox.max.y - baseBbox.min.y;
    const fittedScale =
      width > 0 && height > 0
        ? Math.min(mapTargetSize.width / width, mapTargetSize.height / height)
        : shenzhenProjectionScale;

    return geoMercator()
      .center(center)
      .scale(fittedScale)
      .translate([0, 0]);
  }, [data, outlineData]);

  const { regions, bbox, baseShapes } = useMemo(() => {
    const regions: CityProps["data"][] = [];
    const baseShapes: Shape[] = [];
    const bbox = new Box2();

    const toV2 = (coord: number[]) => {
      const [x, y] = projection(coord as [number, number])!;
      const projected = new Vector2(x, -y);
      bbox.expandByPoint(projected);
      return projected;
    };

    const toShape = (polygon: number[][][]) => {
      const [outer, ...holes] = polygon.map((ring) => ring.map(toV2));
      const shape = new Shape(outer);
      shape.holes = holes.map((hole) => new Path(hole));
      return shape;
    };

    data.features.forEach((feature) => {
      const shapes = feature.geometry.coordinates.map(toShape);

      const [x, y] = projection(
        feature.properties.centroid ?? feature.properties.center
      )!;

      regions.push({
        city: feature.properties.name,
        cityId: [x, -y, depth + 0.1],
        shapes,
      });
    });

    outlineData?.features.forEach((feature) => {
      feature.geometry.coordinates.forEach((polygon) => {
        baseShapes.push(toShape(polygon));
      });
    });

    return {
      regions,
      bbox,
      baseShapes,
    };
  }, [projection, data, outlineData, depth]);

  useLayoutEffect(() => {
    if (!groupRef.current) return;
    const tl = gsap.timeline({
      onComplete: () => {
        useConfigStore.setState({ mapPlayComplete: true });
      },
    });

    tl.to(camera.position, {
      x: 60,
      y: 125,
      z: 160,
      duration: 2,
      ease: "circ.out",
    });
    tl.to(
      groupRef.current.scale,
      { x: 1, y: 1, z: 1, duration: 1, ease: "circ.out" },
      2
    );
    groupRef.current.traverse((obj) => {
      if (obj instanceof Mesh || obj instanceof LineSegments) {
        tl.to(obj.material, { opacity: 1, duration: 1, ease: "circ.out" }, 2);
      }
    });

    return () => {
      tl.kill();
    };
  }, [camera]);

  return (
    <group
      ref={groupRef}
      rotation={[-Math.PI / 2, 0, 0]}
      scale-z={0.01}
      position-x={20}>
      {baseShapes.length > 0 && (
        <ShapeMesh position-z={depth + 0.05} bbox={bbox} args={[baseShapes]}>
          <meshStandardMaterial map={texture1} normalMap={texture2} />
        </ShapeMesh>
      )}
      {regions.map((region, idx) => (
        <City
          key={idx}
          depth={depth}
          bbox={bbox}
          data={region}
          map={texture1}
          normalMap={texture2}
        />
      ))}
      <Heatmap
        renderOrder={11}
        projection={projection}
        position-z={depth + 1}
      />
    </group>
  );
}
