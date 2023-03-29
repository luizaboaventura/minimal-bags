import Produtos from "../../components/Produtos";
import Carrossel from "../../components/Carrossel";

import './Home.css';

export default function Home() {

    return (
        <>
            <Carrossel />
            <div className="vitrine">
                <Produtos />
            </div>
        </>
    );
}
