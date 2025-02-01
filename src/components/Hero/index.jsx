import "./style.scss";
import "../../Globals.scss"

import { HeroImage } from "../../assets";

export default function Hero() {
    return(
        <section className="Hero_Container Default_Background">
            <img src={HeroImage} alt="" />
            <aside className="Description_Container">
                <h2 className="Orange_font">Titulo do Hero</h2>
                <p className="Orange_font">Descrição apresentando o grupo e falando dos seus planos e projetos... <br />{/* br temporario */}
                ( Sujeito a alterações )</p>
            </aside>
        </section>
    );
}