import * as React from "react";
import { KnobsStyled, KnobsMenu, Container } from "./Knobs.styled";
import Toggle from "../Toggle";
import InputGroup from "../InputGroup";

const Knobs: React.FC = props => {
  const { children } = props;
  const child = React.Children.toArray(children)[0];
  const compProps = (child as any).props;
  const [knobs, setKnobs] = React.useState(compProps);

  console.log(compProps);

  return (
    <KnobsStyled>
      <Container>{React.cloneElement(child as any, { ...knobs })}</Container>
      <KnobsMenu>
        {Object.keys(compProps).map(p => (
          <>
            <InputGroup label={p}>
              <Toggle
                checked={knobs[p]}
                onChange={e => setKnobs({ ...knobs, [p]: e.target.value })}
              />
            </InputGroup>
          </>
        ))}
      </KnobsMenu>
    </KnobsStyled>
  );
};

export default Knobs;
