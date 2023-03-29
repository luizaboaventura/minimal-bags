import { Link, Outlet } from "react-router-dom";
import Cabecalho from "../../components/Cabecalho";
import Logo from '../../logo.svg';

import './PaginaPadrao.css';

export default function PaginaPadrao () {

    return (
        <>
            <header className="cabecalho">
                <p className="cabecalho__paragrafo"><strong>Frete grátis</strong> para sul e sudeste acima de <strong>R$ 299,00</strong> | <strong>5% off com pix</strong></p>
                <div className="cabecalho__container">
                    <Link to="/">
                        <img className="cabecalho__logo" src={Logo} alt="logo MinimalBags" />
                    </Link>
                    <div className="cabecalho__conteudo">
                        <Cabecalho />
                    </div>
                </div>
            </header>
            <Outlet />
            <footer className="rodape">
                <p className="rodape__paragrafo">COPYRIGHT <strong>MINIMAL</strong>BAGS - BOLSAS MINIMALISTAS. - 76000852000100 - 2023. TODOS OS DIREITOS RESERVADOS.</p>
            </footer>
        </>
    );

}