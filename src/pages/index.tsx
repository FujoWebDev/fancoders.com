import HomepageGoals from "@site/src/components/HomepageGoal";
import HomepageJoin from "@site/src/components/HomepageJoin";
import HomepageWho from "@site/src/components/HomepageWho";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import React from "react";
import clsx from "clsx";
import styles from "./index.module.css";
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
            <Link className="button button--outline button--custom" to="#join">
              How to Join Us
            </Link>
          </div>
        </div>
        <img src="img/ifthen.png" className={styles.heroLogo} />
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description="Welcome to Fandom Coders, a group of coding hobbyists and professionals who enjoy coding projects to make fandom lives easier and more fun. The website serves as a member hub and a place to host our group wiki which focuses on providing a references, tutorials, and resources for coders of all levels.">
      <HomepageHeader />
      <main>
        <HomepageWho />
        <HomepageGoals />
        <HomepageJoin />
      </main>
    </Layout>
  );
}
