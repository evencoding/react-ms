import styled from "styled-components";

const Container = styled.div<CircleProps>`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  background-color: ${(props) => props.bgColor};
  border: 4px solid ${(props) => props.borderColor};
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

function Circle({ bgColor, borderColor, text = "Good" }: CircleProps) {
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
}

export default Circle;
