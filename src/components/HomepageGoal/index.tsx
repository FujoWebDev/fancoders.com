import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

export default function HomepageGoals(): JSX.Element {
  return (
    <section className={styles.goals}>
      <a id="goals"></a>
      <div className="container padding-bottom--lg">
        <h2>Our Goals</h2>
        <p>
          TO WRITE (see{" "}
          <a href="https://github.com/Fandom-Coders/fandom-coders.github.io/issues/1">
            Issue#1
          </a>
          ).
        </p>
      </div>
    </section>
  );
}
