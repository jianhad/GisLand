import styled from "styled-components";
import NumberAnimation from "@/components/numberAnimation";

const kpiData = [
  { label: "建设用地总面积", value: 442, unit: "亩" },
  { label: "当年获批面积", value: 442, unit: "亩" },
  { label: "新增建设用地", value: 442, unit: "亩" },
];

const progressData = [
  { name: "占用水田面积", value: "442 亩", percent: 23 },
  { name: "占用耕地面积", value: "442 亩", percent: 23 },
];

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
`;

const KpiRow = styled.div`
  display: flex;
  gap: 10px;
`;

const KpiMini = styled.div`
  flex: 1;
  background: rgba(0, 40, 90, 0.45);
  border: 1px solid rgba(0, 120, 220, 0.2);
  border-radius: 4px;
  padding: 10px 6px;
  text-align: center;
`;

const KpiNum = styled(NumberAnimation)`
  font-size: 20px;
  font-weight: 700;
  color: #bdcfff;
  text-shadow: 0 0 8px rgba(48, 97, 219, 0.4);
`;

const KpiLabel = styled.div`
  font-size: 11px;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 4px;
`;

const ProgressItem = styled.div`
  margin-bottom: 4px;
`;

const ProgressLabel = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  margin-bottom: 6px;
  color: rgba(255, 255, 255, 0.7);
`;

const ProgressVal = styled.span`
  color: #fff;
  font-weight: 600;
`;

const ProgressBar = styled.div`
  height: 6px;
  background: rgba(0, 40, 90, 0.6);
  border-radius: 3px;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  height: 100%;
  border-radius: 3px;
  background: linear-gradient(90deg, #3061db, #bdcfff);
  box-shadow: 0 0 8px rgba(48, 97, 219, 0.4);
`;

export default function Chart1() {
  return (
    <Wrapper>
      <KpiRow>
        {kpiData.map((item, i) => (
          <KpiMini key={i}>
            <KpiNum value={item.value} options={{ maximumFractionDigits: 0 }} />
            <KpiLabel>
              {item.label}({item.unit})
            </KpiLabel>
          </KpiMini>
        ))}
      </KpiRow>
      {progressData.map((item, i) => (
        <ProgressItem key={i}>
          <ProgressLabel>
            <span>{item.name}</span>
            <ProgressVal>{item.value}</ProgressVal>
          </ProgressLabel>
          <ProgressBar>
            <ProgressFill style={{ width: `${item.percent}%` }} />
          </ProgressBar>
        </ProgressItem>
      ))}
    </Wrapper>
  );
}
