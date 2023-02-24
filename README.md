# Cardápio digital

Este é um projeto de cardápio digital que usa React no front-end e Flask no back-end.

## Tecnologias usadas

- React
- Flask
- SQLite
## Screenshots

![Tela inicial do cardápio](screenshots/projeto_image1.png)

![Tela inicial do cardápio Tablets](screenshots/projeto_image2.png)

![Tela inicial do cardápio Smartphones](screenshots/projeto_image3.png)

## Instalação

1. Clone o repositório
2. Instale as dependências do front-end:
    ```
    cd frontend
    npm install
    ```
3. Instale as dependências do back-end:
    ```
    cd ..
    cd ../api_flask
    pip install -r requirements.txt
    ```
4. Inicie o back-end:
    ```
    python app.py
    ```
5. Inicie o front-end:
    ```
    cd ../frontend
    npm start
    ```
6. Acesse o cardápio em http://127.0.0.1:3000
