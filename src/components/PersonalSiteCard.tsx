import React from "react";

type PersonalSiteCardProps = {
  name: string;
  url: string;
  creator: string;
  description: string;
  tools: string;
  host: string;
  registrar: string;
};

function PersonalSiteCard(props: PersonalSiteCardProps) {
  const {name, url, creator, description, tools, host, registrar} = props;
  return (<div>
    <a href={url}>{name}</a>
  </div>);
}

export default PersonalSiteCard;