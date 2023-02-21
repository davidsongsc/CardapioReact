import React, { useState, useEffect } from 'react';
import Cardapio from './components/Cardapio';
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';
import './styles/principal.css';
import './styles/media.css';

function App() {
  const [produtos, setProdutos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

  useEffect(() => {
    async function fetchProdutos() {
      const response = await fetch('http://127.0.0.1:5000/produtos');
      const data = await response.json();
      setProdutos(data.produtos);
      setIsLoading(false);
    }
    fetchProdutos();
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <div className="loading">
          <ClipLoader color={'#FF801F'} loading={isLoading} css={override} size={200} />

        </div>
      ) : (
        <Cardapio produtos={produtos} />
      )}
    </div>
  );
}


export default App;
