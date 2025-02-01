import "../Style/Home.scss";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="Home_Container">
      <Header />
      <main className="Home_Content">
        <Hero />
      </main>
    </div>
  );
}
