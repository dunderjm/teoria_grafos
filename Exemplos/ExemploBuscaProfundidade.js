const ListaAdjacencia = require("../lista_adjacencia.js");
const DFS = require("../busca_profundidade.js");

function main() {
    exemplo = new ListaAdjacencia(false, false);

    vertices = [0, 1, 2, 3, 4, 5, 6, 7];
    for (let i of vertices) {
        exemplo.adicionar_vertice(i);
    }

    exemplo.adicionar_aresta(0, 2);
    exemplo.adicionar_aresta(0, 5);
    exemplo.adicionar_aresta(0, 7);
    exemplo.adicionar_aresta(1, 7);
    exemplo.adicionar_aresta(2, 6);
    exemplo.adicionar_aresta(3, 4);
    exemplo.adicionar_aresta(3, 5);
    exemplo.adicionar_aresta(4, 5);
    exemplo.adicionar_aresta(4, 6);
    exemplo.adicionar_aresta(4, 7);
    exemplo.imprimir_grafo();

    dfs_e = new DFS(exemplo);
    dfs_e.dfs();
    console.log(dfs_e.visitados);
}
main()