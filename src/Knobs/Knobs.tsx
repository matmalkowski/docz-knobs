import * as React from "react";
import { KnobsStyled, KnobsMenu, Container } from "./Knobs.styled";
import useComponents from "../useComponents/useComponents";

interface Props {
  options?: { [key: string]: string[] };
}

const Knobs: React.FC<Props> = props => {
  const components = useComponents();
  const { children, options } = props;
  const child = React.Children.toArray(children)[0];
  const compProps = (child as any).props;
  const editablePropNames = Object.keys(compProps).reduce(
    (acc: string[], prop) => {
      if (prop === "children") return acc;
      if (typeof compProps[prop] === "object") return acc;
      return [...acc, prop];
    },
    []
  );
  const [knobs, setKnobs] = React.useState(compProps);

  return (
    <KnobsStyled>
      <Container>{React.cloneElement(child as any, { ...knobs })}</Container>
      <KnobsMenu>
        {editablePropNames.map(p => (
          <div key={p}>
            <components.label>{p}</components.label>
            {typeof knobs[p] === "boolean" ? (
              <components.checkbox
                checked={knobs[p]}
                onChange={e => setKnobs({ ...knobs, [p]: e.target.checked })}
              />
            ) : null}
            {typeof knobs[p] === "string" || typeof knobs[p] === "number" ? (
              options && options[p] ? (
                <components.select
                  value={knobs[p]}
                  onChange={e => setKnobs({ ...knobs, [p]: e.target.value })}
                >
                  {options[p].map((opt: string) => (
                    <option value={opt} key={opt}>
                      {opt}
                    </option>
                  ))}
                </components.select>
              ) : (
                <components.input
                  value={knobs[p]}
                  onChange={e => setKnobs({ ...knobs, [p]: e.target.value })}
                />
              )
            ) : null}
          </div>
        ))}
      </KnobsMenu>
    </KnobsStyled>
  );
};

export default Knobs;
