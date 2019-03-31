import * as React from "react";
import ComponentsContext from "./ComponentsContext";

const useComponents = () => {
  const components = React.useContext(ComponentsContext);
  return components;
};

export default useComponents;
