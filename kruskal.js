const ListaAdjacencia = require("./listaadjacencia.js");

class Kruskal {
    constructor(grafo) {
        this.listaAdj = grafo.listaAdj;
        this.vertices = []; //usado pra separar as arestar e pra criaArvore parar
        this.arestas = []; //arestas separadas com vi, vf, peso
        this.grafo = new ListaAdjacencia(grafo.dirigido, grafo.ponderado); //novo grafo pra arvore geradora mínima
        this.criaArvore();
    }
    
    criaArvore() {
        this.separaArestas();
        let menorAresta; // aresta de menor peso
        let posicao;    // auxiliar pra guardar a posição da aresta no array
        let nArestasUsadas = 0; // controle pra terminar
        let florestas = []; // conjunto de florestas
        for (let i of this.vertices) { //cria a floresta como cada possição do array sendo um array (conjunto)
            florestas.push([].concat(i));
            this.grafo.adicionar_vertice(i);
        }
        while (nArestasUsadas != (this.vertices.length - 1)) { //executa até a condição de parada (nArestas === ( nVertices -1 ))
            let menorValor = this.arestas[0].valor; //guarda o peso da primeira aresta como o menor
            for (let i = 0; i < this.arestas.length; i++) { //varre todo o array de arestas procurando um peso menor ou igual ao guardado
                if (this.arestas[i].valor <= menorValor) { //se o peso encontrado for menor, entao guarda
                    menorValor = this.arestas[i].valor;
                    menorAresta = this.arestas[i];
                    posicao = i; //guarda a posição da aresta de menor peso pra usar posteriormente
                }
            }
            let conjuntoVi = this.verificaFlorestas(florestas, menorAresta.vi); //verifica e guarda o conjunto dos vertices da aresta
            let conjuntoVf = this.verificaFlorestas(florestas, menorAresta.vf); 
            if (( conjuntoVi != conjuntoVf )) { // se os dois estiverem em conjuntos diferentes da árvore
                console.log("floresta", florestas);                
                let aux = florestas[conjuntoVi].concat(florestas[conjuntoVf]); // junta o conjunto dos dois
                let temp = [];
                for (let i = 0; i < florestas.length; i++) { // copia a floresta sem copiar o conjunto dos vértices
                    if (i !== conjuntoVi && i !== conjuntoVf) {
                        temp.push(florestas[i]);
                    }
                }
                florestas = temp; // refaz a floresta
                florestas.push(aux); // com o conjunto dos vertices da aresta unidos
                this.grafo.adicionar_aresta(menorAresta.vi, menorAresta.vf, menorAresta.valor); // adicona a aresta ao grafo da árvore
                this.arestas.splice(posicao, 1); // remove a aresta do array de aresta válidas (já foi usada)
                nArestasUsadas++; //incrementa a quantidade de arestas no grafo da árvore
            } else { // se os dois vertices estiverem no mesmo conjunto então fecha um ciclo
                this.arestas.splice(posicao, 1); //remove a aresta do array de arestas válidas
            }
        }
        console.log("floresta", florestas); 
    }

    verificaFlorestas(florestas, vertice) {
        return florestas.findIndex( (subConjuntos) => {
            return subConjuntos.indexOf(vertice) !== -1;
        } );
    }

    separaArestas() {
        let usados = []; //guarda as arestas já separadas sem o peso, olhando agora acho que nem precisa
        for (let i of this.listaAdj.keys()) {
            this.vertices.push(i); //adiciona os vértices para usar posteriormente
            if (!grafo.direcionado) { // ainda não consigo pensar pra um direcionado
                for (let j of this.listaAdj.get(i)) { // separa as arestas e ignora as que se repetem na lista de adjacencia
                    if (usados.findIndex( (aresta) => { return  (aresta.vi === i & aresta.vf === j[0] ) || ( aresta.vi === j[0] & aresta.vf === i) } ) === -1) {
                        usados.push( { vi : i, vf : j[0] } );
                        this.arestas.push({ vi : i, vf : j[0], valor : j[1] });
                    }
                }
            }
        }
    }

    mostraArvore() {
        this.grafo.imprimir_grafo();
    }
    
    getArvore() {
        return this.grafo;
    }

}
module.exports = Kruskal;
