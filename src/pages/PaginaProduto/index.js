import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import Quantidade from "../../components/Quantidade";
import { obterProdutoPorSlug } from "../../http";

import "./PaginaProduto.css";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader";

export default function PaginaProduto() {

    const navigate = useNavigate();
    const params = useParams();
    const { data, isLoading, error } = useQuery(['produtoPorSlug', params.slug], () => obterProdutoPorSlug(params.slug));
    const [dados, setDados] = useState([]);

    useEffect(() => {
        if (data) {
            setDados(data)
        }
    }, [data]);

    return (
        <div className="pagina__produto">
            <p onClick={() => navigate(-1)} className="voltar">Voltar</p>
            {isLoading && <Loader />}
            {error && (
                <p className="erro">
                    <b>Ops!! Ocorreu um erro inesperado.</b>
                </p>
            )}
            {(!isLoading && !error) && <>
                <div className="produto__principal">
                    <img className="produto__imagem" src={data?.imagem} alt="bolsa"/>
                    <div className="produto__descricao">
                        <p className="produto__titulo">{data?.nome}</p>
                        <p className="produto__preco">{data?.valor}</p>
                        <Quantidade />
                        <button className="produto__botao">Comprar</button>
                        <div className="produto__envio">
                            <p>Envio:</p>
                            <div className="envio">
                                <input type="text" placeholder="Seu CEP"/>
                                <button>Calcular</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="produto__secundario">
                    <p className="secundario__titulo">Descrição do Produto</p>
                    <div className="secundario__descricao">
                        <p>{data?.descricao}</p>
                    </div>
                </div>
            </>}
        </div>
    )
}