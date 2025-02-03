import "../Globals.scss";
import "../Style/Home.scss";
import { Yt_Icon, Email_Icon } from "../assets";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="Home_Container">
      <Header />
      <main className="Home_Content">
        <Hero />
        <section className="Contacts_Container">
          <h2 className="BlueTitle_Color">Contato</h2>
          <section className="Email_Container">
            <img src={Email_Icon} alt="Icone do Email" />
            <p className="LightLink_Font">devs.m3group@gmail.com</p>
          </section>
          <a
            href="https://www.youtube.com/@M3Devs"
            className="Youtube_Container"
          >
            <img src={Yt_Icon} alt="Icone do Youtube" />
            <p className="LightLink_Font">M3 Devs</p>
          </a>
        </section>
        
      </main>
    </div>
  );
}
