import * as React from "react";

import styles from "./styles.css";
import useComponents from "./useComponents";

interface Props {
  options?: { [key: string]: string[] };
}

const Knobs: React.FC<Props> = props => {
  const components = useComponents();
  const { children, options } = props;
  const child = React.Children.toArray(children)[0];
  const compProps = (child as any).props;
  console.log(compProps);
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
    <div className={styles.root}>
      <div className={styles.container}>
        {React.cloneElement(child as any, { ...knobs })}
      </div>
      <div className={styles.menu}>
        {editablePropNames.map(p => (
          <div key={p}>
            <components.label>{p} </components.label>
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
      </div>
    </div>
  );
};

export default Knobs;
