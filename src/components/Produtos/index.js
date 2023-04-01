import { useQuery } from "react-query";
import { obterProdutos } from "../../http";
import "./Produtos.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "../Loader";

export default function Produtos() {
    const { data, isLoading, error } = useQuery(["produtos"], () =>
        obterProdutos()
    );
    const [dados, setDados] = useState([]);

    useEffect(() => {
        if (data) {
            setDados(data);
        }
    }, [data]);

    return (
        <ul className="produtos__lista">
            {isLoading && <Loader />}
            {error && (
                <p className="erro">
                    <b>Ops!! Ocorreu um erro inesperado.</b>
                </p>
            )}
            {dados &&
                dados.map((produto) => (
                    <>
                        <li key={produto.id} className="produtos">
                            <Link to={`/produtos/${produto.slug}`}>
                                <img
                                    className="produtos__imagem"
                                    src={produto.imagem}
                                    alt="bolsa"
                                />
                            </Link>
                            <p className="produtos__titulo">{produto.nome}</p>
                            <p className="produtos__preco">{produto.valor}</p>
                            <Link to={`/produtos/${produto.slug}`}>
                                <button className="produtos__botao">Comprar</button>
                            </Link>
                        </li>
                    </>
                ))}
        </ul>
    );
}
