import styled from "styled-components";
import NumberAnimation from "@/components/numberAnimation";

const statData = [
  { num: 442, unit: "个", label: "项目总数" },
  { num: 442, unit: "万亩", label: "拟用地面积" },
];

const donutData = [
  { val: 89, label: "立即启动" },
  { val: 89, label: "下一年度" },
  { val: 89, label: "2-3年计划" },
  { val: 89, label: "5年计划" },
];

const pieData = [
  { name: "立即启动", count: "111个", color: "#00e4ff" },
  { name: "下一年度", count: "111个", color: "#2a8cff" },
  { name: "2-3年计划", count: "111个", color: "#f7c948" },
  { name: "5年计划", count: "111个", color: "#5ce082" },
];

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

const StatBox = styled.div`
  background: rgba(0, 40, 90, 0.35);
  border-radius: 4px;
  padding: 10px;
  border: 1px solid rgba(0, 120, 220, 0.15);
  text-align: center;
`;

const StatNum = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #bdcfff;
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 2px;
`;

const StatUnit = styled.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
`;

const StatLab = styled.div`
  font-size: 11px;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 2px;
`;

const DonutRow = styled.div`
  display: flex;
  justify-content: space-around;
`;

const DonutWrap = styled.div`
  text-align: center;
`;

const DonutLabel = styled.div`
  text-align: center;
  font-size: 10px;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 4px;
`;

const PieWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 4px;
`;

const Legend = styled.div`
  flex: 1;
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 4px;
`;

export default function Chart4() {
  return (
    <Wrapper>
      <StatGrid>
        {statData.map((item, i) => (
          <StatBox key={i}>
            <StatNum>
              <NumberAnimation
                value={item.num}
                options={{ maximumFractionDigits: 0 }}
              />
              <StatUnit>{item.unit}</StatUnit>
            </StatNum>
            <StatLab>{item.label}</StatLab>
          </StatBox>
        ))}
      </StatGrid>
      <DonutRow>
        {donutData.map((item, i) => (
          <DonutWrap key={i}>
            <div
              style={{
                width: 50,
                height: 50,
                borderRadius: "50%",
                background: `conic-gradient(#00e4ff 0% ${item.val}%, rgba(0, 60, 130, 0.5) ${item.val}% 100%)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}>
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  background: "rgba(8, 28, 60, 0.9)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#fff",
                  }}>
                  {item.val}%
                </span>
              </div>
            </div>
            <DonutLabel>{item.label}</DonutLabel>
          </DonutWrap>
        ))}
      </DonutRow>
      <PieWrap>
        <div
          style={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            background:
              "conic-gradient(#00e4ff 0% 35%, #2a8cff 35% 60%, #f7c948 60% 85%, #5ce082 85% 100%)",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: "rgba(8, 28, 60, 0.9)",
            }}
          />
        </div>
        <Legend>
          {pieData.map((item, i) => (
            <LegendItem key={i}>
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 2,
                  background: item.color,
                  display: "inline-block",
                }}
              />
              {item.name} · {item.count}
            </LegendItem>
          ))}
        </Legend>
      </PieWrap>
    </Wrapper>
  );
}
