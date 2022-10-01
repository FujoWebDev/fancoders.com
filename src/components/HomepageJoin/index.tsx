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
          expand to other socials, and eventually hold public online events.
        </p>
        <p>
          If you're interested in joining us, you can apply through this form:
          <form
            name="fandom-coders-signup"
            method="POST"
            data-netlify="true"
            action="/docs/intro"
          >
            <p>
              <label htmlFor="email" className="required">
                Email
              </label>
              <input type="email" name="email" id="email" required />
            </p>
            <p>
              <label htmlFor="about" className="required">
                A bit about you
              </label>
              <div>
                How long have you been in fandom? Why are you interested in
                joining us?
              </div>
              <textarea name="about" id="about" required />
            </p>
            <fieldset>
              <legend>Signup for</legend>
              <label>
                <input type="checkbox" value="Discord" /> Discord server
              </label>
              <label>
                <input type="checkbox" value="BobaBoard" /> BobaBoard realm
                (waitlist){" "}
              </label>
              <details>
                <summary>What's a BobaBoard realm?</summary>
                <p>A realm is...</p>
              </details>
            </fieldset>
            <p>
              <label htmlFor="how-did-you-hear">
                How did you hear about us?
              </label>
              <input name="how-did-you-hear" id="how-did-you-hear" required />
            </p>
            <button type="submit">Apply</button>
          </form>
        </p>
        <p>
          Alternatively, reach out to Ms Boba on{" "}
          <a href="https://essential-randomness.tumblr.com">tumblr</a> or{" "}
          <a href="https://twitter.com/EssentialRandom">twitter</a>. All current
          members also have the ability to invite new ones.
        </p>
      </div>
    </section>
  );
}
