import * as React from "react";

interface Props {
  color: string;
}

const Button: React.FC<Props> = props => {
  return (
    <button style={{ backgroundColor: props.color }}>{props.children}</button>
  );
};

export default Button;
