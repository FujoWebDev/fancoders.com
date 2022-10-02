import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

export default function HomepageJoin(): JSX.Element {
  return (
    <section className={styles.who}>
      <a id="who"></a>
      <div className="container padding-top--lg">
        <h2>Who Are We?</h2>
        <p>
          <em>
            Fandom Coders is a community where tech professionals and coding
            hobbyists alike can share and discuss their coding projects
          </em>
          , find help getting started or unblocked, and learn new skills and
          concepts. Among others goals, Fandom Coders aims to increase coding
          literacy in fandom, and to connect fandom builders with each other to
          create and shape the fandom internet they want to see.
        </p>
        <p>
          <em>
            We welcome people of all experience levels and coding interests
          </em>
          : from those just getting started to those who have been in the tech
          industry for years; from those who want to create site skins/themes or
          build a personal web page, to those who want to create an app or
          dabble in data analysis. Current favorite topics include Open Source
          Software, decentralization, and the changing shape of fandom social
          media.
        </p>
        <p>
          This website serves as a member hub and a place to host our wiki; the
          wiki is a group project of all of our members - a crowd-sourced
          resource for fandom coders of varying levels.
          <em>
            We hope to provide easy-to-follow tutorials and resources
            specifically tailored to the needs of fandom people.
          </em>
        </p>
      </div>
    </section>
  );
}
