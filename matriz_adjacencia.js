class MatrizAdjacencia{
    constructor(digrafo = false){
        this.matriz = new Array();
        this.digrafo = digrafo;
    }

    adicionar_vertice(lista = null){
        this.matriz.push([]);
        let indice = this.matriz.length - 1;  //indice do ultimo elemento adicionado
        for( var i = 0; i < indice ; i++){
            this.matriz[indice].push(0)
        }
        for( let i of this.matriz)
            i.push(0);
    }

    remover_vertice(v){
        let vertice = this.matriz[v];
        for(let i of this.matriz){
            i.splice(v, 1);
        }
        this.matriz.splice(vertice, 1);
    }
    adicionar_aresta(i, j){
        this.matriz[i][j] = 1;
        if(!this.digrafo)
            this.matriz[j][i] = 1;
    }
    
    remover_aresta(i, j){
        this.matriz[i][j] = 0;
        if (!this.digrafo)
            this.matriz[j][i] = 0;
    }

    consultar_vertice(v){
        return this.matriz[v];
    }

    imprimir_matriz(){
        console.log(this.matriz);
    }
}
module.exports = MatrizAdjacencia;
