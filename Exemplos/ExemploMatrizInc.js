const MatrizIncidencia = require("../matriz_incidencia");

function main() {
    matriz = new MatrizIncidencia();
    matriz.adicionar_vertice();
    matriz.adicionar_vertice();
    matriz.adicionar_vertice();
    matriz.adicionar_aresta(1, 2);
    matriz.remover_aresta(0);
    matriz.remover_vertice(1);
    matriz.imprimir_grafo();
}

main()