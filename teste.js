const Grafo = require("./grafo.js");
function main() {
    grafo = new Grafo(false, true); //dirigido, ponderado
    vertices = [0, 1, 2, 3];
    for (let i of vertices) {
        grafo.adicionar_vertice(i);
    }

    grafo.adicionar_aresta(0, 1, 7);
    grafo.adicionar_aresta(0, 2, 1);
    grafo.adicionar_aresta(0, 3, 2);
    grafo.adicionar_aresta(2, 3, 6);
    grafo.imprimir_grafo();

    //grafo.remover_aresta(0, 1);
    //grafo.imprimir_grafo();
    // grafo.remover_vertice(0);
    //grafo.imprimir_grafo();
}

main();