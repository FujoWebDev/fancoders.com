import React from "react";
import styles from "./styles.module.css";

const SignUp = ({ onSuccess }: { onSuccess: () => void }) => (
  <form
    className={styles.join}
    name="fandom-coders-signup"
    method="POST"
    data-netlify="true"
    onSubmit={(e) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(
          [...formData.entries()].reduce((current, [k, v]) => {
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
        <p>
          Imagine a forum. Try to modernize it. Make it (mostly) anonymous.
          Something like that. For more information,{" "}
          <a href="https://www.bobaboard.com">www.bobaboard.com</a>.
        </p>
      </details>
    </fieldset>
    <p>
      <label htmlFor="how-did-you-hear">How did you hear about us?</label>
      <input name="how-did-you-hear" id="how-did-you-hear" />
    </p>
    <details>
      <summary>
        Help! I submitted this form some time ago but haven't received an invite
        yet!
      </summary>
      <p>
        Woops, sorry about that! We're currently manually sending invites around
        once a week. If more time has passed, we're either running <em>very</em>{" "}
        behind, or might have accidentally skipped your application.
      </p>
      <p>
        Feel free to resubmit this form with your email, and let us know you've
        already submitted a full application before. We'll take it from there.
      </p>
    </details>
    <button type="submit" className="button button--primary">Apply</button>
  </form>
);

const Congratulations = () => {
  return (
    <div className={styles.congratulations}>
      <h3>Thank you!</h3>
      Your application has been sent for review. To submit another application,
      refresh the page.
    </div>
  );
};

const Form = () => {
  const [submitted, setSubmitted] = React.useState(false);
  if (submitted) {
    return <Congratulations />;
  }
  return <SignUp onSuccess={() => setSubmitted(true)} />;
};

export default Form;
