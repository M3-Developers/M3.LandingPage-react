import "./style.scss";
import "../../Globals.scss";

export default function Members({ Member }) {
  return (
    <aside className="Member_Container">
      <main className="Member_Content">
        <img src={Member.Image} alt={`imagem do membro`} />
        <h3 className="MemberTitle_Color">{Member.Name}</h3>
        <p>{Member.Description}</p>
      </main>
      <a href={Member.Link} className="LightLink_Font">{`Acesse o site do ${Member.Name}`}</a>
    </aside>
  );
}
