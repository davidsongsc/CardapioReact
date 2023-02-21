import React, { useState, useEffect } from 'react';
function Produtos() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        async function fetchProdutos() {
            const response = await fetch('http://127.0.0.1:5000/produtos');
            const data = await response.json();
            setProdutos(data);
        }
        fetchProdutos();
    }, []);

    return (
        <div>
            {produtos.produtos.map((produto) => (
                <div key={produto.id}>
                    <h2>{produto.nomeproduto}</h2>
                    <p>{produto.descricao}</p>
                    <p>Preço: R$ {produto.valor}</p>
                </div>
            ))}
        </div>
    );
}

export default Produtos;
