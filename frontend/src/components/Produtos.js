import React from 'react';
function Produto_imagem(endereco_ip, nome_produto) {
  let protocolo = "http://";
  let end_img = ":5000/static/img/produtos/";
  let tipo_img = ".png";
  return protocolo + endereco_ip + end_img + nome_produto + tipo_img;
}

function Produto({ produto }) {
  const ip = "127.0.0.1"
  const imagem = Produto_imagem(ip, produto.nomeproduto);

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
