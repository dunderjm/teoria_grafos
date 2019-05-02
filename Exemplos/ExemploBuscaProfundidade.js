const ListaAdjacencia = require("./lista_adjacencia");
const busca_largura = require("../busca_profundidade.js");

function main() {
    exemplo = new ListaAdjacencia(true, true);
    vertices = [0, 1, 2, 3, 4];
    for (let i of vertices) {
        exemplo.adicionar_vertice(i);
    }

    exemplo.adicionar_aresta(0, 1);
    exemplo.adicionar_aresta(1, 3);
    exemplo.adicionar_aresta(1, 2);
    exemplo.adicionar_aresta(2, 4);
    exemplo.adicionar_aresta(3, 0);
    exemplo.adicionar_aresta(3, 4);
    exemplo.adicionar_aresta(4, 1);

    let visitados = busca_largura(exemplo, 0);
    console.log(visitados);
}

main();