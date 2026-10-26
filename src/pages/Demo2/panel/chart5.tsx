import styled from "styled-components";

const steps = [1, 2, 3, 4, 5, 6];

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: center;
`;

const BizFlow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
`;

const BizStep = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 4px;
  background: rgba(0, 60, 130, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(0, 120, 220, 0.3);
  font-size: 11px;
`;

const BizStat = styled.div`
  display: flex;
  gap: 16px;
`;

const BizStatItem = styled.div`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
`;

const BizStatNum = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: #bdcfff;
`;

const SectionLabel = styled.div`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 4px;
`;

const BarCompare = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 4px;
`;

const BarLabel = styled.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.85);
`;

const BarTrack = styled.div`
  flex: 1;
  height: 8px;
  border-radius: 4px;
  background: rgba(0, 40, 90, 0.6);
  overflow: hidden;
  display: flex;
`;

const BarStats = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 4px;
`;

export default function Chart5() {
  return (
    <Wrapper>
      <BizFlow>
        <span>业务办理</span>
        {steps.map((n) => (
          <BizStep
            key={n}
            style={
              n <= 5
                ? { background: "#bdcfff", color: "#081c3c", fontWeight: 700 }
                : undefined
            }>
            {n}
          </BizStep>
        ))}
        <span>件</span>
      </BizFlow>
      <BizStat>
        <BizStatItem>
          <BizStatNum>1,231 件</BizStatNum>
          已办结
        </BizStatItem>
        <BizStatItem>
          <BizStatNum>1,231 件</BizStatNum>
          办理中
        </BizStatItem>
      </BizStat>
      <SectionLabel>审查规则</SectionLabel>
      <BarCompare>
        <BarLabel>禁止类</BarLabel>
        <BarTrack>
          <div style={{ height: "100%", background: "#ff6b6b", width: "80%" }} />
          <div style={{ height: "100%", background: "#f7c948", width: "20%" }} />
        </BarTrack>
        <BarLabel>限制类</BarLabel>
      </BarCompare>
      <BarStats>
        <span>76 项 80%</span>
        <span>76 项 20%</span>
      </BarStats>
    </Wrapper>
  );
}
