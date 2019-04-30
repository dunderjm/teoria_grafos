class Matriz_incidencia{
    constructor(dirigido = false){
        this.dirigido = dirigido;
        this.matriz = new Array();
    }

    adicionar_vertice(){
        this.matriz.push([]); //nova linha, representa um novo vértice
    }

    remover_vertice(v){
        let indice = this.matriz[v].indexOf(this.matriz[v].find(e => e == 1));
        for (let i of this.matriz){
            i.splice(indice, 1);
        }
        this.matriz.splice(v, 1); // v é o indice do vertice
    }

    adicionar_aresta(i, j){
       for(let n of this.matriz){
            if (this.matriz.indexOf(n) ==  i | this.matriz.indexOf(n) == j){
                n.push(1);
            }else{
                n.push(0)
            }
        } 
    }

    remover_aresta(a){
        for(let i of this.matriz){
            i.splice(a, 1);
        }
    }

    consultar_vertice(v){

    }
    imprimir_grafo(){
        console.log(this.matriz);
    }
}

function main(){
    matriz = new Matriz_incidencia();
    matriz.adicionar_vertice();
    matriz.adicionar_vertice();
    matriz.adicionar_vertice();
    matriz.adicionar_aresta(1, 2);
    matriz.remover_aresta(0);
    matriz.remover_vertice(1);
    matriz.imprimir_grafo();

}
main()