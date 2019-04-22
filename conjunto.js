class Aresta{
    constructor(i, j, peso = 0){
        this.i = i;
        this.j = j;
        this.peso = peso;
    }
}

class Grafo_conjuntos{
    constructor(dirigido = false){
        this.vertices = new Set();
        this.arestas = new Array();
        this.dirigido = dirigido;
    }

    adicionar_vertice(v){
        this.vertices.add(v);
    }

    remover_vertice(v){
        let aresta = this.arestas.find((aresta) => aresta.i == v | aresta.j == v);
        while(aresta != undefined){
            this.arestas.splice(this.arestas.indexOf(aresta), 1);
            aresta = this.arestas.find((aresta) => aresta.i == v | aresta.j == v);
        }
        this.vertices.delete(v);
    }

    adicionar_aresta(i, j, peso){
        this.arestas.push(new Aresta(i, j, peso));
    }

    remover_aresta(i, j){
        let aresta = this.arestas.find((aresta) => aresta.i == i & aresta.j == j);
        this.arestas.splice(this.arestas.indexOf(aresta), 1);
    }

    consultar_vertice(v){
        
    }

    imprimir_grafo(){
        console.log(this.vertices);
        console.log(this.arestas);
    }
}

function main(){
    grafo = new Grafo_conjuntos();
    vertices = [0, 1, 2, 3];
    for(let i of vertices){
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