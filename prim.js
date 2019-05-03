const ListaAdjacencia = require("./lista_adjacencia");

class Prim {
    constructor(grafo) {
        this.listaAdj = grafo.listaAdj; 
        this.qtdVertices = this.listaAdj.size;
        this.grafo = new ListaAdjacencia(grafo.dirigido, grafo.ponderado);
    }

    criaArvore() {
        let nArestasUsadas = 0; // controle para terminar criaArvore
        let aux = []; // vai guardar todos os vertices como objetos no formato abaixo
        let verticesFechados = []; // vai guardar a posição em aux dos vértices que já foram fechados
        for (let i of this.listaAdj) { // percorre todos os vertices, cria um objeto e adiciona informações necessárias
            aux.push({
                vertice: i[0], // nome do vértice
                adjacencia: i[1], // vértices adjacentes com seus pesos
                antecessor: null, // vértice antecessor vazio
                distanciaAntecessor: Infinity, // distância infinita do vértice antecessor
                fechado: false // vertice fechado === true
            });
        }
        let verticeAtual = 0; // vertice inicial, vertice com menor distancia
        aux[verticeAtual].antecessor = null;  // vertice inicial não possui antecessor
        aux[verticeAtual].distanciaAntecessor = 0; // distancia do vertice inicial 0
        aux[verticeAtual].fechado = true; // fecha o vértice
        this.grafo.adicionar_vertice(aux[verticeAtual].vertice); // adiciona o vértices ao novo grafo
        verticesFechados.push(aux[verticeAtual].vertice); // adiciona o vértice a lista de vértices fechados    
        while (this.qtdVertices !== verticesFechados.length) { // condição de parada, árvore terminada se true
            console.log();
            console.log("VERTICE ATUAl");
            console.log(aux[verticeAtual]);
            for (let i of aux[verticeAtual].adjacencia) { // percorre todos os vértices adjacentes ao vértice atual (vértice com menor distância)
                if (verticesFechados.indexOf(i[0]) !== -1) { // se o vértice estiver fechado, pula para o próximo
                    continue;
                }
                let adjVerticeAtual = -1; // controle
                do { // atualiza a distância dos vértices adjacentes
                    adjVerticeAtual = aux.findIndex( (element) => { // retorna a posição em aux do vértice adjacente ao atual
                        // console.log(index, element.vertice, i[0]);
                        return element.vertice === i[0] && element.fechado  === false; // se o vértice adjacente estiver fechado, ignora
                    });
                    console.log("VERTICE ADJACENTE ABERTO: ");
                    console.log(aux[adjVerticeAtual]);
                    if (adjVerticeAtual !== -1 && aux[adjVerticeAtual].distanciaAntecessor > i[1]) { // se a distância atual do vertice adjacente for menor que a distância do vértice atual
                        // console.log("achei");
                        aux[adjVerticeAtual].antecessor = aux[verticeAtual].vertice; // atualiza o antecessor
                        aux[adjVerticeAtual].distanciaAntecessor = i[1]; // atualiza a distância
                        console.log("VERTICE ATUALIZADO: ");
                        console.log(aux[adjVerticeAtual]);
                    } else {  // SOMENTE PRA EXIBICAO DO PROCESSO, APAGAR SE NAO NECESSARIO
                        console.log("VERTICE NÃO ATUALIZADO, DISTANCIA ATUAL MENOR");
                    }
                } while(adjVerticeAtual === -1 ); 
            }

            let verticeAux = {vertice: null, distancia: Infinity}; // vertice auxiliar para guardar o próximo vértice com menor distância
            let cont = 0; // controle
            for (let j of aux) { // percorre todos os vértices procurando o aberto de menor distância
                if (j.fechado === false) { 
                    if (j.distanciaAntecessor < verticeAux.distancia) { // verifica se a distância é menor que a guardada no verticeAux
                        verticeAux.vertice = cont; // guarda a posição do vértice em aux
                        verticeAux.distancia = j.distanciaAntecessor; // guarda a distancia de seu antecessor
                    }
                }
                cont ++;
            }

            verticeAtual = verticeAux.vertice; // atualiza o vértice atual
            if (verticeAux.vertice !== null) { // se o vértice atual for válido
                aux[verticeAtual].fechado = true; // fecha o vértice
                verticesFechados.push(aux[verticeAtual].vertice); // adiciona o vértice a lista de vértices fechado
                this.grafo.adicionar_vertice(aux[verticeAtual].vertice); // adiciona o vértices ao novo grafo
                // põe a aresta na árvore
                this.grafo.adicionar_aresta(aux[verticeAtual].antecessor, aux[verticeAtual].vertice, aux[verticeAtual].distanciaAntecessor);
                nArestasUsadas++; // incrementa o número de arestas usadas
            }
        }
        console.log();
        console.log("VERTICE ATUAl");
        console.log(aux[verticeAtual]);
    }

    mostraArvore() {
        this.grafo.imprimir_grafo();
    }

    getArvore() {
        return this.grafo;
    }  
}

module.exports = Prim;