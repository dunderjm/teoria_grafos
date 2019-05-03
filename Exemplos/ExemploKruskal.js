const ListaAdjacencia = require("../lista_adjacencia.js");

const Kruskal = require("../kruskal");

function main() {

    grafo = new ListaAdjacencia(false, true); //dirigido, ponderado
    vertices = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    for (let i of vertices) {
        grafo.adicionar_vertice(i);
    }

    grafo.adicionar_aresta('a', 'b', 3);
    grafo.adicionar_aresta('a', 'c', 2);
    grafo.adicionar_aresta('a', 'd', 9);
    grafo.adicionar_aresta('b', 'e', 6);
    grafo.adicionar_aresta('b', 'c', 1);
    grafo.adicionar_aresta('c', 'e', 5);
    grafo.adicionar_aresta('c', 'f', 7);
    grafo.adicionar_aresta('c', 'd', 8);
    grafo.adicionar_aresta('d', 'f', 4);
    grafo.adicionar_aresta('e', 'f', 10);
    grafo.adicionar_aresta('e', 'g', 3);
    grafo.adicionar_aresta('f', 'g', 10);
    grafo.imprimir_grafo();

    console.log();

    kruskal = new Kruskal(grafo);
    arvore = kruskal.getArvore();
    console.log();
    arvore.imprimir_grafo();
}

main();