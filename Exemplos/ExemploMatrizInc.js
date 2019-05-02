const MatrizIncidencia = require("../matriz_incidencia");

function main() {
    matriz = new MatrizIncidencia(true);
    matriz.adicionar_vertice(); //0
    matriz.adicionar_vertice(); //1
    matriz.adicionar_vertice(); //2
    matriz.adicionar_vertice(); //3
    matriz.adicionar_vertice(); //4
    matriz.adicionar_vertice(); //5

    matriz.adicionar_aresta(0, 1); //a1 
    matriz.adicionar_aresta(0, 2); //a2
    matriz.adicionar_aresta(0, 3); //a3
    matriz.adicionar_aresta(2, 1); //a4
    matriz.adicionar_aresta(3, 1); //a5
    matriz.adicionar_aresta(1, 5); //a6
    matriz.adicionar_aresta(4, 3); //a7
    matriz.adicionar_aresta(5, 4); //a8

    //matriz.remover_aresta(0); 
   // matriz.remover_vertice(1);
    matriz.imprimir_grafo();
}

main()