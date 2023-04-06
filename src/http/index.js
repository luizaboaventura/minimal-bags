import axios from "axios";

export const obterProdutos = async () => {

    const resposta = await axios.get("http://localhost:3000/dados");

    return resposta.data;
}

export const obterProdutoPorSlug = async (slug) => {

    const resposta = await axios.get("http://localhost:3000/dados", {
        params: {
            slug
        }
    })

    return resposta.data[0];
}

export const obterEnderecoPorCep = async (cep) => {
    const resposta = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    
    return resposta.data;
}