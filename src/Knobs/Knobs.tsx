import * as React from "react";

const Knobs: React.FC = props => {
  const { children } = props;
  const child = React.Children.toArray(children)[0];
  const compProps = (child as any).props;
  const [knobs, setKnobs] = React.useState(compProps);

  console.log(compProps);

  return (
    <div>
      {React.cloneElement(child as any, { ...knobs })}
      <br />
      {Object.keys(compProps).map(p => (
        <>
          <span>{p}: </span>
          <input
            value={knobs[p]}
            onChange={e => setKnobs({ ...knobs, [p]: e.target.value })}
          />
        </>
      ))}
    </div>
  );
};

export default Knobs;
