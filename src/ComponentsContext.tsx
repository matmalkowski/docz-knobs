import * as React from "react";
import styles from "./styles.css";

const ComponentsContext = React.createContext({
  label: (
    props: React.DetailedHTMLProps<
      React.LabelHTMLAttributes<HTMLLabelElement>,
      HTMLLabelElement
    >
  ) => <label {...props} className={styles.label} />,
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
  ) => <input {...props} className={styles.input} />,
  select: (
    props: React.DetailedHTMLProps<
      React.SelectHTMLAttributes<HTMLSelectElement>,
      HTMLSelectElement
    >
  ) => <select {...props} className={styles.select} />
});

export default ComponentsContext;
