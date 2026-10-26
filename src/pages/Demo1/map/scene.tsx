import { Suspense } from "react";
import Cloud from "./cloud";
import Base from "./base";
import Bottom from "./bottom";
import type { CityGeoJSON } from "@/types/map";

import mapData from "@/assets/shenzhen.json";
import outlineMapData from "@/assets/shenzhen_outline.json";

const shenzhenMapData = mapData as CityGeoJSON,
  outlineData = outlineMapData as CityGeoJSON;

export default function Scene() {
  return (
    <Suspense fallback={null}>
      <Cloud />

      <Base data={shenzhenMapData} outlineData={outlineData} />

      <Bottom />
    </Suspense>
  );
}
