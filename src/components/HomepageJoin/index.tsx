import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

export default function HomepageJoin(): JSX.Element {
  return (
    <section className={styles.join}>
      <a id="join"></a>
      <div className="container">
        <h2>How to Join Us</h2>
        <p>
          Fandom Coders primarily exists as a Discord server, with plans to
          expand to other socials and eventually hold public online events.
        </p>
        <p>
          If you're interested in joining us, reach out to essential-randomness
          on <a href="https://essential-randomness.tumblr.com">tumblr</a> or{" "}
          <a href="https://twitter.com/EssentialRandom">twitter</a> for a
          Discord invite. Current members also have the ability to invite new
          ones.
        </p>
      </div>
    </section>
  );
}
