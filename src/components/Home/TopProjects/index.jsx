import "./style.scss";
import "../../../Globals.scss";
import { useState, useEffect } from "react";

export default function TopProjects({ Project }) {
  const Website = Project.WebsiteLink;

  return (
    <section className="TopProjects_Container">
      <h3 className="">{Project.Name}</h3>
      <p className="">{Project.Description}</p>
      <section className="ProjectIntegrants_Container">
        <p>integrantes:</p>
        <ul>
          {Object.entries(Project.Members).map(([Key, Member]) => (
            <li key={Key} className="">{`${Member.Name} (${Member.Role})`}</li>
          ))}
        </ul>
      </section>
      <section className="ProjectLink_Container">
        <a href={Project.RepositoryLink} className="LightLink_Font">
          Repositório do Github
        </a>
        {Website && Website.Available ? (
          <a href={Website.Link} className="LightLink_Font">
            Link para o Website
          </a>
        ) : null}
      </section>
    </section>
  );
}
