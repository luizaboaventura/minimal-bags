import { useQuery } from 'react-query';
import { obterProdutos } from '../../http';
import './Produtos.css';
import { Link } from "react-router-dom";

export default function Produtos () {

    const { data } = useQuery(['produtos'], () => obterProdutos());

    return (
        <ul className="produtos__lista">
             {data?.map((produto) => 
             <>
                <li key={produto.id} className="produtos">
                    <Link to={`/produtos/${produto.slug}`}>
                        <img className="produtos__imagem" src={produto.imagem} alt="bolsa"/>
                    </Link>
                    <p className="produtos__titulo">{produto.nome}</p>
                    <p className="produtos__preco">{produto.valor}</p>
                    <Link to={`/produtos/${produto.slug}`}>
                        <button className='produtos__botao'>Comprar</button>
                    </Link>
                </li>
             </>
             )}
        </ul>
    )
}


