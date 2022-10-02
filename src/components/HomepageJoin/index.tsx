import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const Form = ({ onSuccess }: { onSuccess: () => void }) => (
  <form
    name="fandom-coders-signup"
    method="POST"
    data-netlify="true"
    onSubmit={(e) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      console.log(...formData.entries());
      fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(
          [...formData.entries()].reduce((current, [k, v]) => {
            debugger;
            if (typeof v == "string") {
              current[k] = v;
            }
            return current;
          }, {} as Record<string, string>)
        ).toString(),
      })
        .then(() => onSuccess())
        .catch((error) => alert(error));
    }}
  >
    <input type="hidden" name="form-name" value="fandom-coders-signup" />
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
      <span>
        How long have you been in fandom? Why are you interested in joining us?
      </span>
      <textarea name="about" id="about" required />
    </p>
    <fieldset>
      <legend>Signup for</legend>
      <label>
        <input type="checkbox" name="discord" /> Discord server
      </label>
      <label>
        <input type="checkbox" name="bobaboard" /> BobaBoard realm (waitlist){" "}
      </label>
      <details>
        <summary>What's a BobaBoard realm?</summary>
        <p>A realm is...</p>
      </details>
    </fieldset>
    <p>
      <label htmlFor="how-did-you-hear">How did you hear about us?</label>
      <input name="how-did-you-hear" id="how-did-you-hear" />
    </p>
    <button type="submit">Apply</button>
  </form>
);

export default function HomepageJoin(): JSX.Element {
  const [submitted, setSubmitted] = React.useState(false);

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
        </p>
        {submitted ? (
          <div className="congratulations">
            <h3>Thank you!</h3>
            Your application has been sent for review. To submit another
            application, refresh the page.
          </div>
        ) : (
          <Form onSuccess={() => setSubmitted(true)} />
        )}
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
