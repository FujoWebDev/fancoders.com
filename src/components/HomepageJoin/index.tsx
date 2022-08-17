import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function HomepageJoin(): JSX.Element {
  return (
    <section className={styles.join}><a id="join"></a>
      <div className="container">
        <h2>How to Join Us</h2>
        <p>Right now Fandom Coders primarily exists as a Discord server, but we do have plans to expand to other social media. We also plan to hold public online events. For now, if you're interested in joining us, please reach out to essential-randomness on <a href="https://essential-randomness.tumblr.com">tumblr</a> or <a href="EssentialRandom">twitter</a> for an invite to the Discord.</p>
      </div>
    </section>
  );
}
