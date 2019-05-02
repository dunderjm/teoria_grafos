function busca_largura(grafo, inicial){
    let visitados = new Map();
    let fila = new Array();
    let distancia_atual = 1;
    fila.push(inicial); //adiciona o vertice inicial na fila
    visitados.set(inicial, distancia_atual);
    distancia_atual++;
    while(fila.length > 0){ // enquanto a fila não for vazia
        let u =  fila.shift();
        let adj_u;
        if(grafo.ponderado){
            adj_u = Array.from(grafo.consultar_vertice(u).keys());
        }else{
            adj_u = grafo.consultar_vertice(u); // pega todos os vertices adjacente ao vertice u 
        }
        for(let i of adj_u){
            if(visitados.has(i)) continue;
            visitados.set(i, distancia_atual);
            fila.push(i);
        }
        distancia_atual++;
    }
    return visitados;
}
module.exports = busca_largura;