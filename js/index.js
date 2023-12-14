const routes = {
  "/": "/pages/home.html",
  "/universe": "/pages/universe.html",
  "/explorer": "/pages/explorer.html",
  404: "/pages/404.html",
};

function route(event) {
  event = event || window.event;
  //evita o padrao
  event.preventDefault();

  window.history.pushState({}, "", event.target.href);

  handle();
}

function handle() {
  //const { pathname, href, host, port } = window.location;
  const { pathname } = window.location;
  const route = routes[pathname] || routes[404];

  //Promessa assincrona prometo que vou procurar essa rota e quando eu concluir prometo executar uma funçao
  //fetch muito usado para comunicação de api
  fetch(route)
    .then((data) => data.text())
    .then((html) => {
      document.querySelector("#app").innerHTML = html;
    });

  console.log(pathname);
}
handle();

window.onpopstate = () => handle();
window.route = () => route();
