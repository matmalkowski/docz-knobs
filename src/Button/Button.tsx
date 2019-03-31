import * as React from "react";

interface Props {
  withPadding: boolean;
  color: string;
}

const Button: React.FC<Props> = props => {
  return (
    <button
      style={{
        backgroundColor: props.color,
        padding: props.withPadding ? 20 : 0
      }}
    >
      {props.children}
    </button>
  );
};

export default Button;
