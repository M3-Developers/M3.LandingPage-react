import "../Globals.scss";
import "../Style/Home.scss";
import { Yt_Icon, Email_Icon } from "../assets";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Members from "../components/Member";
import TopProjects from "../components/TopProjects";
import { useEffect, useState } from "react";

// Simulação dos membros
import MembersObject from "../SimBD/MembersBD";
// Simulação dos Projetos
import ProjectsObject from "../SimBD/ProjectsBD";

export default function Home() {
  const [members, SetMembers] = useState(null);
  const [projects, SetProjects] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      SetMembers(MembersObject);
    }, 500);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      SetProjects(ProjectsObject);
    }, 500);
  }, []);

  return (
    <div className="Home_Container">
      <Header />
      <main className="Home_Content">
        <Hero />
        <section className="Contacts_Container">
          <h2 className="BlueTitle_Color">Contato</h2>
          <section className="Email_Container">
            <img src={Email_Icon} alt="Icone do Email" />
            <p className="DarkLink_Font">devs.m3group@gmail.com</p>
          </section>
          <a
            href="https://www.youtube.com/@M3Devs"
            className="Youtube_Container"
          >
            <img src={Yt_Icon} alt="Icone do Youtube" />
            <p className="DarkLink_Font">M3 Devs</p>
          </a>
        </section>

        <h2 className="Members_Title BlueTitle_Color">Membros do M3</h2>
        <section className="Members_Container">
          {members ? (
            Object.entries(members).map(([Key, Value]) => (
              <Members key={Key} Member={Value} />
            ))
          ) : (
            <p className="Loading_Text">Carregando...</p>
          )}
        </section>
        <h2 className="Project_Title BlueTitle_Color">Principais Projetos:</h2>
        <section className="Projects_Container">
          {projects ? (
            Object.entries(projects).map(([Key, Value]) => (
              <TopProjects key={Key} Project={Value} />
            ))
          ) : (
            <p className="Loading_Text">Carregando Projetos...</p>
          )}
        </section>
      </main>
    </div>
  );
}
