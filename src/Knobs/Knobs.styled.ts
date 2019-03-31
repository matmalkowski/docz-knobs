import styled from "styled-components";

const KnobsStyled = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border: 1px solid rgb(206, 212, 222);
`;

const Container = styled.div`
  padding: 20px;
  flex: 1;
`;

const KnobsMenu = styled.div`
  background-color: rgb(246, 247, 249);
  border-left: 1px solid rgb(206, 212, 222);
  width: 200px;
`;

export { KnobsStyled, KnobsMenu, Container };
