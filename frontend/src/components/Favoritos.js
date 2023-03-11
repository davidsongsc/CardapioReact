import React from 'react';
import Produto from './Produtos';
import Banner from './Banner';
function Favoritos({ produtos }) {
  return (
    <>
      <Banner />
      <div className='c-div-cardapio'>
        <h1 className='titulo-cardapio'>Cardapio</h1>
        <div className="cardapio">
          {produtos.map((produto) => (
            <Produto key={produto.id} produto={produto} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Favoritos;
