import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function HomepageGoals(): JSX.Element {
  return (
    <section className={styles.goals}><a id="goals"></a>
      <div className="container padding-bottom--lg">
        <h2>Our Goals</h2>
        <p>Some Stuff</p>
      </div>
    </section>
  );
}
