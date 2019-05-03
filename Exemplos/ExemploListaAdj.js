const ListaAdjacencia = require("../lista_adjacencia.js");

function main() {
    grafo = new ListaAdjacencia(false, false); //dirigido, ponderado
    vertices = [0, 1, 2, 3];
    for (let i of vertices) {
        grafo.adicionar_vertice(i);
    }

    grafo.adicionar_aresta(0, 1, 7);
    grafo.adicionar_aresta(0, 2, 1);
    grafo.adicionar_aresta(0, 3, 2);
    grafo.adicionar_aresta(2, 3, 6);
    grafo.imprimir_grafo();
    console.log(grafo.consultar_vertice(0));
    //grafo.remover_aresta(0, 1);
    //grafo.imprimir_grafo();
    // grafo.remover_vertice(0);
    //grafo.imprimir_grafo();
}

main();