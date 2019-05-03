class DFS{
    constructor(grafo){
        this.count = 0;
        this.visitados = new Map();
        this.grafo = grafo;
    }
    
    dfs(){
        this.count = 0;
        for (let i of this.grafo.listaAdj.keys()) {
            this.visitados.set(i, -1);
        }

        for (let i of this.grafo.listaAdj.keys()){
            if (this.visitados.get(i) == -1) {
                this.dfsR(i);
            }
        }
    }

    dfsR(v) {
        this.visitados.set(v, this.count);
        this.count++;
       
        let adj_u;
        if (this.grafo.ponderado){
            adj_u = Array.from(this.grafo.consultar_vertice(v).keys());
        } else {
            adj_u = this.grafo.consultar_vertice(v); // pega todos os vertices adjacente ao vertice v
        }

        for( let i of adj_u){
            if(this.visitados.get(i) == -1){
                this.dfsR(i);
            }
        }
    }
}

module.exports = DFS;