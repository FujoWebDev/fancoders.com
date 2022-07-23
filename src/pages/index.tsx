import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageGoals from '@site/src/components/HomepageGoal';
import HomepageJoin from '@site/src/components/HomepageJoin';
import HomepageWho from '@site/src/components/HomepageWho';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--dark', styles.heroBanner)}>
      <div className={clsx('container', styles.heroContents)}>
        <div>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <div className={styles.buttons}>
            <Link
              className="button button--outline button--primary margin-right--sm"
              to="#who">
              Who are we?
            </Link>
            <Link
              className="button button--outline button--secondary margin-right--sm"
              to="#goals">
              Our Goals
            </Link>
            <Link
              className="button button--outline button--custom"
              to="#join">
              How to Join Us
            </Link>
          </div>
        </div>
        <img src="/img/ifthen.png" className={styles.heroLogo}/>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageWho />
        <HomepageGoals />
        <HomepageJoin />
      </main>
    </Layout>
  );
}
