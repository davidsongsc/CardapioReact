setTimeout(function () {
    var element = document.createElement("div");
    element.style.backgroundColor = "white";
    element.innerHTML = 'Bem-vindo! Esta API funciona como Servidor backend para o React. <br> Acesse o link   <a href="http://127.0.0.1:3000">React Page!</a>';
    document.body.appendChild(element);
  }, 5000);