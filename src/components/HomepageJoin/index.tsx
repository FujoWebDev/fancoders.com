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
          Fandom Coders currently exists as a Discord server, with plans to
          expand to other socials, and eventually hold public online events. All
          current members have the ability to invite new ones.
        </p>
        <p>
          If you're interested in joining us, you can sign up through this form:
          <form name="fandom-coders-signup" method="POST" data-netlify="true">
            <label>
              Your Email: <input type="email" name="email" />
            </label>
            <button name="submit" type="submit">
              Send
            </button>
          </form>
        </p>
        <p>
          Alternatively, reach out to Ms Boba on{" "}
          <a href="https://essential-randomness.tumblr.com">tumblr</a> or{" "}
          <a href="https://twitter.com/EssentialRandom">twitter</a> for a
          Discord invite.
        </p>
      </div>
    </section>
  );
}
