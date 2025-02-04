import "../Globals.scss";
import "../Style/Home.scss";
import { Yt_Icon, Email_Icon } from "../assets";
import MembersObject from "../Simutation"; // Arquivo de simulação do BD
import Header from "../components/Header";
import Hero from "../components/Hero";
import Members from "../components/Member";
import { useEffect, useState } from "react";

// Simulação dos membros

export default function Home() {
  const [members, SetMembers] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      SetMembers(MembersObject);
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
            <p>Carregando...</p>
          )
        }
        </section>
      </main>
    </div>
  );
}
