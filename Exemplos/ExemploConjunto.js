const Conjunto = require("../conjunto.js");

function main() {
    grafo = new Conjunto();
    vertices = [0, 1, 2, 3];
    for (let i of vertices) {
        grafo.adicionar_vertice(i);
    }
    grafo.adicionar_aresta(0, 1);
    grafo.adicionar_aresta(0, 2);
    grafo.adicionar_aresta(0, 3);
    grafo.adicionar_aresta(2, 3);
    grafo.imprimir_grafo();
    grafo.remover_vertice(0);
    grafo.imprimir_grafo();
}
main()