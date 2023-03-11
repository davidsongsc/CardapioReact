import React from 'react';
import dados from '../configure.json';

function Produto_imagem(nome_produto) {
  return `http://${dados.ip}:5000/static/img/produtos/${nome_produto}.png`;;
}

function Produto({ produto }) {
  const imagem = Produto_imagem(produto.nomeproduto);

  return (
    <div className="cardapio-item">
      <div className='produtos-card'>
        <div className='conteiner-imagem-valor'>
          <img className='produto-imagem' src={imagem} />
          <h4>R$ {produto.valor.toFixed(2)}</h4>
          <h3 id='avaliacao-produto'>{produto.avaliacao}</h3>
        </div>

        <div className='conteiner-bloco'>
          <h2 className="titulo-produto">{produto.nomefantasia}</h2>
          <p>{produto.descricao}
            
          </p>


        </div>
      </div>
    </div>
  );
}

export default Produto;
