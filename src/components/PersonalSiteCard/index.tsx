import Link from "@docusaurus/Link";
import React from "react";
import styles from "./styles.module.css";

type PersonalSiteCardProps = {
  name: string;
  url: string;
  creator: string;
  description: React.ReactNode;
  tools: string;
  host: string;
  registrar: string;
};

function PersonalSiteCard(props: PersonalSiteCardProps) {
  const { name, url, creator, description, tools, host, registrar } = props;
  return (
    <div className={styles.siteCard}>
      <a href={url}>{name}</a> by {creator}
      {description}
    </div>
  );
}

export default PersonalSiteCard;
