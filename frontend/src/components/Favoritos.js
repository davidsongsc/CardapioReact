import React from 'react';
import Produto from './Produtos';

function Favoritos({ produtos }) {
  return (
    <div className='c-div-cardapio'>
      <h1 className='titulo-cardapio'>Os Preferidos</h1>
      <div className="cardapio">
        {produtos.map((produto) => (
          <Produto key={produto.id} produto={produto} />
        ))}
      </div>
    </div>
  );
}

export default Favoritos;
