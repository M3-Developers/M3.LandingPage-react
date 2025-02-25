import "../Style/Error.scss";
import "../Globals.scss";
import Header from "../components/Global/Header";
import Footer from "../components/Global/Footer";

export default function Error() {
    return (
        <section className="Error_Container">
            <Header />
            <main className="Error_Content">
                <h1>Erro 404</h1>
                <h2>Pagina não encontrada...</h2>
                <section className="ErrorDescription_Container">
                    <p>A página que você está procurando não foi encontrada.</p>
                    <p>Verifique se o link esta certo ou tente se conectar novamente...</p>
                </section>
            </main>
            <Footer />
        </section>
    )
}