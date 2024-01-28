import React from "react";
import styles from "./ModuleBtn.module.css";
import classNames from "classnames";

export default function ModuleBtn({ variant, color }) {
  return (
    <button
      className={classNames(styles.moduleBtn, variant && styles[variant])}
      style={color && { backgroundColor: color }}
    >
      ModuleBtn
    </button>
  );
}
