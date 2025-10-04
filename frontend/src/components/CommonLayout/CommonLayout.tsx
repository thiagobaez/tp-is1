import React from "react";
import { Link } from "wouter";

import { ErrorBoundary } from "@/components/ErrorBoundary/ErrorBoundary";
import { useToken } from "@/services/TokenContext";

import styles from "./CommonLayout.module.css";

export const CommonLayout = ({ children }: React.PropsWithChildren) => {
  const [tokenState] = useToken();

  return (
    <div className={styles.mainLayout}>
      <ul className={styles.topBar}>{tokenState.state === "LOGGED_OUT" ? <LoggedOutLinks /> : <LoggedInLinks />}</ul>
      <div className={styles.body}>
        <ErrorBoundary>{children}</ErrorBoundary>
      </div>
    </div>
  );
};

const LoggedOutLinks = () => {
  return (
    <>
      <li>
        <Link href="/login">Log in</Link>
      </li>
      <li>
        <Link href="/signup">Sign Up</Link>
      </li>
    </>
  );
};

const LoggedInLinks = () => {
  const [, setTokenState] = useToken();

  const logOut = () => {
    setTokenState({ state: "LOGGED_OUT" });
  };

  return (
    <>
      <li>
        <Link href="/under-construction">Main Page</Link>
      </li>
      <li>Products</li>
      <li>
        <Link href="/brands">Brands</Link>
      </li>
      <li>
        <button onClick={logOut}>Log out</button>
      </li>
    </>
  );
};
