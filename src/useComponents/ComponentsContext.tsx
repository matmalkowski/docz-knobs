import * as React from "react";

const ComponentsContext = React.createContext({
  label: (
    props: React.DetailedHTMLProps<
      React.LabelHTMLAttributes<HTMLLabelElement>,
      HTMLLabelElement
    >
  ) => <label {...props} />,
  checkbox: (
    props: React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >
  ) => <input type="checkbox" {...props} />,
  input: (
    props: React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >
  ) => <input {...props} />,
  select: (
    props: React.DetailedHTMLProps<
      React.SelectHTMLAttributes<HTMLSelectElement>,
      HTMLSelectElement
    >
  ) => <select {...props} />
});

export default ComponentsContext;
