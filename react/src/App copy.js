import React, { useState, useEffect } from 'react';
import Cardapio from './components/Cardapio';

function App() {
  const [produto, setProdutos] = useState([]);

  useEffect(() => {
    async function fetchProdutos() {
      const response = await fetch('http://127.0.0.1:5000/produtos');
      const data = await response.json();
      setProdutos(data);
    }
    fetchProdutos();
  }, []);

  return (
    <div className="App">
      <Cardapio produtos={produto} />
      {console.log(produto)}
    </div>
  );
}

export default App;
