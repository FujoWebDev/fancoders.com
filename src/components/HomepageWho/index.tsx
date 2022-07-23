import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function HomepageJoin(): JSX.Element {
  return (
    <section className={styles.who}><a id="who"></a>
      <div className="container padding-top--lg">
        <h2>Who Are We?</h2>
        <p>Fandom Coders is a community of tech professionals and coding hobbyists who have gathered together to share and discuss their coding projects, get help, learn something new, and help shape the fandom internet we want to see. We welcome coders of all experience levels - from those just getting started to those who have been in the tech industry for years - and any interests - whether you want to create site skins/themes, build a personal web page, or create an app. Current favorite topics are Open Source projects, decentralization, and the changing shape of fandom social media.</p>
        <p>Our Wiki is a joint project of all of our members - a crowd-sourced resource for fandom coders of varying levels. We hope to provide easy to follow tutorials and resources for as many programming languages as our members have experience with.</p>
      </div>
    </section>
  );
}
