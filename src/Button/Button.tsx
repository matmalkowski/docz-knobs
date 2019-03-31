import * as React from "react";

interface Props {
  variant: "solid" | "outlined";
  withPadding?: boolean;
  color: string;
}

const Button: React.FC<Props> = props => {
  const { variant, withPadding, color, children } = props;
  return (
    <button
      style={{
        backgroundColor: variant === "solid" ? color : "white",
        color: variant === "outlined" ? color : "white",
        padding: withPadding ? 20 : 0
      }}
    >
      {children}
    </button>
  );
};

export default Button;
