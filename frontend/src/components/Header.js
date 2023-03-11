import React from 'react';
import dados from '../configure.json';

function Header() {
    return (
        <>
        <head>
        <title>{dados.dados.titulo}</title>
        </head>
            <header>
                <div className='header-main'>
                    <div className='logo-header-div'>
                        <h1 className='header-texto'>Marca da Loja</h1>
                        <img className='header-logo' src='/logo2.png' alt='Logo Hamburgueria' />
                    </div>
                    <nav>
                        <div class="spacer"></div>
                        <ul>
                            <li><a href="#" alt="Inicio" title="Inicio">Início</a></li>
                            <li><a href="#" alt="Delivery" title="Delivery">Delivery</a></li>
                            <li><a href="#" alt="Contato" title="Contato">Contato</a></li>
                        </ul>
                    </nav>
                </div>
            </header>


        </>
    )
}

export default Header;
