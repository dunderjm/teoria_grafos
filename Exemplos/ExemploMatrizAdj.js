const MatrizAdjacencia = require("../matriz_adjacencia.js");

function main() {
    matriz = new MatrizAdjacencia();
    matriz.adicionar_vertice(); //0
    matriz.adicionar_vertice(); //1
    matriz.adicionar_vertice(); //2
    matriz.adicionar_aresta(0, 1);
    matriz.remover_vertice(0);
    matriz.imprimir_matriz();
}
main()