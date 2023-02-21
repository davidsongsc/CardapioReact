import React from 'react';

function Produto({ produto }) {
  const imagem = "http://127.0.0.1:5000/static/img/produtos/" + produto.nomeproduto + ".png";
  return (
    <div className="cardapio-item">
      <div className='produtos-card'>
        <h2 className="titulo-produto">{produto.nomefantasia}</h2>
        <img src={imagem} />
        <p>{produto.descricao}</p>
        <h3>Avaliação Media: {produto.avaliacao}</h3>
        <h4>R$ {produto.valor.toFixed(2)}</h4>
      </div>
    </div>
  );
}

export default Produto;
