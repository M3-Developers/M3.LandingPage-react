import "./style.scss";
import { Logo } from "../../../assets/index";

export default function Header() {
  return (
    <header className="Header_Container">
      <img src={Logo} alt="Logo M3" />
      <nav>
        <a href="/">Home</a>
        <a href="/Projects">Projetos</a>
        <a href="https://github.com/M3-Developers">GitHub</a>
      </nav>
    </header>
  );
}
