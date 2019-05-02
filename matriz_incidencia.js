class MatrizIncidencia{
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
            if(this.dirigido){
               if(this.matriz.indexOf(n) == i){
                   n.push(1);
               }else if(this.matriz.indexOf(n) == j){
                   n.push(-1);
               }else{
                   n.push(0);
               }
            } else{
                if (this.matriz.indexOf(n) == i | this.matriz.indexOf(n) == j) {
                    n.push(1);
                } else {
                    n.push(0);
                }
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
        for(let i of this.matriz){
            let conc = "" + this.matriz.indexOf(i)+ " | ";
            for(let j of i){
                conc += j + "\t|";
            }
          console.log(conc);
       }
    }
}
module.exports = MatrizIncidencia;
