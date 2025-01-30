import "./style.scss";
import { Logo } from "../../assets/index";

export default function Header() {
  return (
    <header className="HeaderContainer">
      <img src={Logo} alt="" />
      <nav>
        <a href="">Home</a>
        <a href="">Projetos</a>
        <a href="">GitHub</a>
      </nav>
    </header>
  );
}
