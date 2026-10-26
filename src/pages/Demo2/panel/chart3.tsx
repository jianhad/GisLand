import styled from "styled-components";

const regData = [
  { name: "未交地", count: "123 宗", pct: "10%", color: "#3061DB" },
  { name: "到期未交地", count: "44 宗", pct: "10%", color: "#f7c948" },
  { name: "未开工", count: "123 宗", pct: "10%", color: "#3061DB" },
  { name: "到期未开工", count: "44 宗", pct: "10%", color: "#f7c948" },
  { name: "未竣工", count: "123 宗", pct: "10%", color: "#3061DB" },
  { name: "到期未竣工", count: "44 宗", pct: "10%", color: "#ff6b6b" },
];

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
`;

const RegItem = styled.div`
  background: rgba(0, 40, 90, 0.35);
  border-radius: 4px;
  padding: 8px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-left: 3px solid #3061db;
`;

const RegName = styled.span`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.85);
`;

const RegMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const RegCount = styled.span`
  font-size: 13px;
  color: #bdcfff;
  font-weight: 600;
`;

const RegPct = styled.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  width: 36px;
  text-align: right;
`;

export default function Chart3() {
  return (
    <Wrapper>
      {regData.map((item, i) => (
        <RegItem key={i} style={{ borderLeftColor: item.color }}>
          <RegName>{item.name}</RegName>
          <RegMeta>
            <RegCount>{item.count}</RegCount>
            <RegPct>{item.pct}</RegPct>
          </RegMeta>
        </RegItem>
      ))}
    </Wrapper>
  );
}
