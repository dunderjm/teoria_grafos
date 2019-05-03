class Aresta{
    constructor(i, j, peso = 0){
        this.i = i;
        this.j = j;
        this.peso = peso;
    }
}

class Conjunto{
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
        let conc = "Vertices: ";
        for(let i of this.vertices){
           conc+= i + " ";
        }
        console.log(conc);
        conc = "Arestas: ";
        for( let i of this.arestas){
            conc += "(" + i.i + ", " + i.j +") ";
        }
        console.log(conc);
    }
}

module.exports = Conjunto;