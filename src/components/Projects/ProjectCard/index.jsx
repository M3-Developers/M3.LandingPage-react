import "../../../Globals.scss";
import "./style.scss";
import { useState } from "react";

export default function ProjectCard({ ProjectObject }) {
  const RepositoryLink = ProjectObject.RepositoryLink;
  const WebsiteInfo = ProjectObject.WebsiteLink;
  const [DisplayInfo, SetDisplayInfo] = useState(false);

  const ToggleDisplay = () => {
    SetDisplayInfo(!DisplayInfo);
  };

  return (
    <section
      className="
    ProjectCard_Container 
    Orange_Color 
    Default_Background
    "
      onClick={ToggleDisplay}
    >
      <h1>{ProjectObject.Name}</h1>
      {DisplayInfo ? (
        <main className="ProjectCard_Content">
          <p className="ProjectCard_Description">{ProjectObject.Description}</p>
          <p>Integrantes:</p>
          <ul>
            {Object.entries(ProjectObject.Members).map(([Key, Member]) => (
              <li key={Key}>{`${Member.Name} (${Member.Role})`}</li>
            ))}
          </ul>
          <section className="Link_Container">
            <p>
              Repositório:{" "}
              <a href="RepositoryLink" className="LightLink_Font">
                {RepositoryLink}
              </a>
            </p>
          </section>
          {WebsiteInfo.Available ? (
            <section className="Link_Container">
              <p>
                Website: {" "}
                <a href={WebsiteInfo.Link} className="LightLink_Font">
                  {WebsiteInfo.Link}
                </a>
              </p>
            </section>
          ) : null}
        </main>
      ) : null}
    </section>
  );
}
