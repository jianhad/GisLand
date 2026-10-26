import styled from "styled-components";

const btnData = [
  { text: "用地查询" },
  { text: "用地跟踪" },
  { text: "用地指标监测" },
  { text: "城市更新专题" },
  { text: "土地整备专题" },
  { text: "土地储备专题" },
];

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  align-content: center;
`;

const GridBtn = styled.div`
  background: rgba(0, 40, 90, 0.4);
  border: 1px solid rgba(0, 120, 220, 0.25);
  border-radius: 6px;
  padding: 12px 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: 0.25s;

  &:hover {
    background: rgba(0, 100, 200, 0.35);
    border-color: rgba(0, 200, 255, 0.5);
    transform: translateY(-2px);
  }
`;

const GIcon = styled.div`
  width: 32px;
  height: 32px;
  background: linear-gradient(
    135deg,
    rgba(0, 228, 255, 0.25),
    rgba(42, 140, 255, 0.25)
  );
  border: 1px solid rgba(0, 200, 255, 0.4);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #bdcfff;
  font-size: 16px;
`;

const GText = styled.div`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
`;

export default function Chart6() {
  return (
    <Wrapper>
      {btnData.map((item, i) => (
        <GridBtn key={i}>
          <GIcon>&#9733;</GIcon>
          <GText>{item.text}</GText>
        </GridBtn>
      ))}
    </Wrapper>
  );
}
