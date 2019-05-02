//Representação usando Lista de Adjacência
class ListaAdjacencia{
    constructor(dirigido = false, ponderado = false){
        this.listaAdj = new Map();
        this.dirigido = dirigido;
        this.ponderado = ponderado;
        this.nVertices = 0;
        this.nArestas = 0;
    }

    adicionar_vertice(v){
        if(this.ponderado){
            this.listaAdj.set(v, new Map());
        } else{
            this.listaAdj.set(v, []);
        }    
        this.nVertices++;
    }

    remover_vertice(v){
        if(this.listaAdj.has(v)){
            if(!this.dirigido){
                if(this.ponderado){
                    for(let i of this.listaAdj.get(v).keys()){
                        this.listaAdj.get(i).delete(v);
                    }
                } else{
                    for(let i of this.listaAdj.get(v)){
                        this.listaAdj.get(v).splice(this.listaAdj.get(v).indexOf(v), 1);
                    }
                }
            }
            this.listaAdj.delete(v);
            this.nVertices--;
        }else{
            console.log("Esse vértice não existe");
        }
    }

    adicionar_aresta(vi, vf, peso = 0){
        if(this.ponderado){
            this.listaAdj.get(vi).set(vf, peso);
            if (!this.dirigido) {
                this.listaAdj.get(vf).set(vi, peso);
            }
        } else{
            this.listaAdj.get(vi).push(vf);
            if (!this.dirigido) {
                this.listaAdj.get(vf).push(vi);
            }
        }
        this.nArestas++;
    }

    remover_aresta(vi, vf){
        if(this.ponderado){
            this.listaAdj.get(vi).delete(vf);
            if(!this.digrafo){
                this.listaAdj.get(vf).delete(vi);
            }
        }else{
            this.listaAdj.get(vi).splice(this.listaAdj.get(vi).indexOf(vf), 1);
            if (!this.digrafo) {
                this.listaAdj.get(vf).splice(this.listaAdj.get(vf).indexOf(vi), 1);
            }
        }
       
        this.nArestas--;
    }

    consultar_vertice(v){
        return this.listaAdj.get(v);
    }

    imprimir_grafo(){
        for(let i of this.listaAdj.keys()){
           const get_values = this.listaAdj.get(i);
           let conc = "";

           for (let j of this.listaAdj.get(i)){
               conc += j + " ";
           }

           console.log(i + " -> " + conc);
       }
    }
}
module.exports = ListaAdjacencia;