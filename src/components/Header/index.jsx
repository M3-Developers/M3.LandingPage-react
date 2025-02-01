import "./style.scss";
import { Logo } from "../../assets/index";

export default function Header() {
  return (
    <header className="Header_Container">
      <img src={Logo} alt="Logo M3" />
      <nav>
        <a href="">Home</a>
        <a href="">Projetos</a>
        <a href="">GitHub</a>
      </nav>
    </header>
  );
}
