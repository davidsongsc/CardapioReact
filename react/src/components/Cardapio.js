import React from 'react';
import Produto from './Produtos';

function Cardapio({ produtos }) {
  return (
    <div>
      <h1>Cardápio</h1>
      <div className="cardapio">
        {produtos.map((produto) => (
          <Produto key={produto.id} produto={produto} />
        ))}
      </div>
    </div>
  );
}

export default Cardapio;
