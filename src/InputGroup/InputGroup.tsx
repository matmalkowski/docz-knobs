import styled from "styled-components";
import * as React from "react";

const Container = styled.div`
  width: 100%;
  display: flex;
`;
const Label = styled.label``;

interface Props {
  label: string;
}

const InputGroup: React.FC<Props> = props => {
  const { children, label } = props;

  return (
    <Container>
      <Label>{label}</Label>
      {children}
    </Container>
  );
};

export default InputGroup;
