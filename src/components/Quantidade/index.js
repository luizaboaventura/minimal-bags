import React, { useContext } from "react";
import { ImMinus } from "react-icons/im";
import { ImPlus } from "react-icons/im";

import './Quantidade.css';
import Context from "../ContextApi/Context";


export default function Quantidade () {

    const [quantidade, setQuantidade] = useContext(Context);

    function aumentaQuantidade() {
        setQuantidade(quantidade + 1);
    }

    function diminuiQuantidade() {
        if (quantidade > 1) setQuantidade(quantidade - 1);
    }

    return (
        <div className="contador">
            <button className="botao" onClick={diminuiQuantidade}><ImMinus size={15}/></button>
            <p className="quantidade">{quantidade}</p>
            <button className="botao" onClick={aumentaQuantidade}><ImPlus size={15}/></button>
        </div>
    )
}