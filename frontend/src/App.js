import React, { useState, useEffect } from 'react';
import Favoritos from './components/Favoritos';
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';
import './styles/principal.css';
import './styles/media.css';
import Header from './components/Header';
import dados from './configure.json';


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
      const response = await fetch(`http://${dados.ip}:5000/produtos`);
      const data = await response.json();
      setProdutos(data.produtos);
      setIsLoading(false);
    }
    fetchProdutos();
  }, []);

  return (
    <>
  
    <Header />
      <div className="Principal">
        {isLoading ? (
          <div className="loading">
            <ClipLoader color={'#FF801F'} loading={isLoading} css={override} size={200} />

          </div>
        ) : (
          
          <Favoritos produtos={produtos} />
        )}
      </div>
    </>
  );
}


export default App;
