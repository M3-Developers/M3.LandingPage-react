import "./style.scss";
import "../../../Globals.scss";

export default function Footer() {
  return (
    <footer className="Footer_Container">
      <aside className="Report_Container">
        <p>Encontrou algum erro? </p>
        <p>
          Reporte <a href="" className="LightLink_Font">Aqui</a>...
        </p>
        <p>ou nos notifique pelo nosso email: </p>
        <p className="Email_Text">devs.m3group@gmail.com</p>
      </aside>
      <aside className="Suport_Container">
        <p>Suporte</p>
        <p>Documentação</p>
      </aside>
    </footer>
  );
}
