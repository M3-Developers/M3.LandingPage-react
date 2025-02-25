import "../Globals.scss";
import "../Style/Home.scss";
import { Yt_Icon, Email_Icon } from "../assets";
import Header from "../components/Global/Header";
import Hero from "../components/Home/Hero";
import Members from "../components/Home/Member";
import TopProjects from "../components/Home/TopProjects";
import Footer from "../components/Global/Footer";
import { useEffect, useState } from "react";

// Simulação BD dos membros
import MembersObject from "../SimBD/MembersBD";
// Simulação BD dos Projetos
import TopProjectsObject from "../SimBD/TopProjectsBD";

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
      SetProjects(TopProjectsObject);
    }, 500);
  }, []);

  return (
    <section className="Home_Container">
      <Header />
      <main className="Home_Content">
        {/* Hero de apresentação */}

        <Hero />

        {/* Contato */}

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

        {/* Membros do M3 */}

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

        {/* Projetos com destaque */}

        <h2 className="Project_Title BlueTitle_Color">Principais Projetos:</h2>
        <section className="HomeProjects_Container">
          {projects ? (
            Object.entries(projects).map(([key, Value]) => (
              <TopProjects key={key} Project={Value} ObjectName={key}/>
            ))
          ) : (
            <p className="Loading_Text">Carregando Projetos...</p>
          )}
        </section>

        <h2 className="BlueTitle_Color GotoProjects_anchor">
          Veja os nossos projetos{" "}
          <a href="/Projects" className="DarkLink_Font">
            aqui
          </a>
          .
        </h2>
      </main>
      <Footer />
    </section>
  );
}
