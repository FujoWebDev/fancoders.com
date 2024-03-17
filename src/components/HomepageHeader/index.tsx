import Link from "@docusaurus/Link";
import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--dark", styles.heroBanner)}>
      <div className={clsx("container", styles.heroContents)}>
        <div>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <div className={styles.buttons}>
            <Link
              className="button button--outline button--primary margin-right--sm"
              to="#who"
            >
              Who are we?
            </Link>
            <Link
              className="button button--outline button--secondary margin-right--sm"
              to="#goals"
            >
              Our Goals
            </Link>
            <Link
              className="button button--outline button--custom"
              to="#origins"
            >
              Our Origins
            </Link>
          </div>
        </div>
        <img src="img/ifthen.png" className={styles.heroLogo} />
      </div>
    </header>
  );
}

export default HomepageHeader;
