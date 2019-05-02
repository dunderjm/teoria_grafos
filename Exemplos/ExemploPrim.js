const ListaAdjacencia = require("../lista_adjacencia");
const Prim = require("../prim");
function main() {

    /*
    grafo = new ListaAdjacencia(false, true); //dirigido, ponderado
    vertices=[0, 1, 2, 3];
    for(let i of vertices){
        grafo.adicionar_vertice(i);
    }

    grafo.adicionar_aresta(0, 1, 7);
    grafo.adicionar_aresta(0, 2, 1);
    grafo.adicionar_aresta(0, 3, 2);
    grafo.adicionar_aresta(2, 3, 6);
    grafo.imprimir_grafo();
    */

    /*
    grafo = new ListaAdjacencia(false, true); //dirigido, ponderado
    vertices=['v0', 'v1', 'v2', 'v3', 'v4', 'v5'];
    for(let i of vertices){
        grafo.adicionar_vertice(i);
    }

    grafo.adicionar_aresta('v0', 'v1', 10);
    grafo.adicionar_aresta('v0', 'v2', 5);
    grafo.adicionar_aresta('v1', 'v2', 3);
    grafo.adicionar_aresta('v1', 'v3', 1);
    grafo.adicionar_aresta('v2', 'v3', 8);
    grafo.adicionar_aresta('v2', 'v4', 2);
    grafo.adicionar_aresta('v3', 'v4', 4);
    grafo.adicionar_aresta('v3', 'v5', 4);
    grafo.adicionar_aresta('v4', 'v5', 6);
    grafo.imprimir_grafo();
    */

    /*
    grafo = new Adjacencia(false, true); //dirigido, ponderado
    vertices=['a', 'b', 'c', 'd','e', 'f'];
    for(let i of vertices){
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
    grafo.imprimir_grafo();
    */


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
    console.log();

    prim = new Prim(grafo);
    prim.criaArvore();
    console.log();
    console.log();
    prim.mostraArvore();
}

main();