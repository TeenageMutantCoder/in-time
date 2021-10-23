import React, { ReactNode } from "react";
import styles from "./layout.module.scss";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  <div className={styles.Layout}>{children}</div>;
};

export default Layout;
