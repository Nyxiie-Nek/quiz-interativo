const perguntas = [
    {
        enunciado: "você quer saber a qual é o youtuber que começou a fazer videos de FNAF",  //a pergunta
        alternativas: [
            {
                texto: "Core", //primeira alternativa
                afirmacao: [
                    "Na verdade, o Core foi um dos primeros youtubers brasileiros a fazer videos sobre Five Nights At Freddy's", //comentário para a resposta
                    //segundo comentário
                ],
                proxima: 4,     //
            },
            {
                texto: "Markplier",
                afirmacao: [
                    "você descobriu que o Markplier foi um dos primeiros youtubers a gravarem vídeos sobre Five Nights At Freddy's",
                ],
                proxima: 1,
            }
        ]
    },
    {
        enunciado: "Qual Youtuber derrotou o Sans de Undertale de primeira?",
        alternativas: [
            {
                texto: "Godenot",
                afirmacao: [
                    "Incrivelmente, o Godenot conseguiu derrotar o sans sem morrer.",
                    
                ],
            },
            {
                texto: "Pai troll",
                afirmacao: [
                    "O Pai troll nunca chegou até o final da luta em vídeo, a paciência dele não durou e ele deu rage.",
                ],
                proxima:3
            }
        ]
    },
    {
        enunciado: "Qual é o youtuber que ficou famoso por causa de enigmas?",
        alternativas: [
            {
                texto: "Cellbit",
                afirmacao: [
                    "O cellbit realmente ficou famoso por causa do enigma Do Not Believe His Lies",
                    "afirmação 2"
                ],
            },
            {
                texto: "Gemaplys",
                afirmacao: [
                    "Na verdade, o Gemaplys ficou famoso por fazer reviews de jogo ruims",
                    "você não sabe escolher"
                ],
            }
        ]
    },
    {
        enunciado: "Você prefere nike ou adidas?",
        alternativas: [
            {
                texto: "nike",
                afirmacao: [
                    "você tem bom gosto",
                    "afirmação 2"
                ],
            },
            {
                texto: "adidas",
                afirmacao: [
                    "você é vaiado",
                    "você não sabe escolher"
                ],
            }
        ]
    },
    {
        enunciado: "você quer saber quem foi o youtuber que zerou o hollow kinght na escudada?",
        alternativas: [
            {
                texto: "Dillian Rezende",
                afirmacao: [
                    "O Dillian além de ter zerado cuphead só na machadada, ele conseguiu zerar o hollow kinght só na escudada.",
                    "afirmação 2"
                ],
            },
            {
                texto: "Saiko",
                afirmacao: [
                    "Ná verdade, o Saiko nunca sequer jogou hollow knight",
                    "você não sabe escolher"
                ],
            }
        ]
    }
];

//aleatorio

const nomes = ["Saiko", "Ycaro", "Meia Um", "Raposito", "Gemaplys", "Felps", "Cellbit", "Alanzoka", "Jean", "Goularte", "Polar", "Core", "Souzones", "Mr. Guinas", "Gabs"];

function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

const nome = aleatorio(nomes)

//script principal

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-btn"); 
const botaoIniciar = document.querySelector(".iniciar-btn");
const telaInicial = document.querySelector(".tela-inicial");

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

botaoIniciar.addEventListener('click', iniciaJogo);

function iniciaJogo() {
    atual = 0;
    historiaFinal = "";
    telaInicial.style.display = 'none';
    caixaPerguntas.classList.remove("mostrar");
    caixaAlternativas.classList.remove("mostrar");
    caixaResultado.classList.remove("mostrar");
    mostraPergunta();
}

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + " ";
   if(opcaoSelecionada.proxima !== undefined) {
       atual = opcaoSelecionada.proxima;
   }else {
       mostraResultado();
       return;
   }
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = `Após os estudos, ${nome} descobriu que`;
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    caixaResultado.classList.add("mostrar"); 
    botaoJogarNovamente.addEventListener("click", jogarNovamente); 
}

function jogarNovamente(){
    atual = 0;
    historiaFinal = "";
    caixaResultado.classList.remove("mostrar"); 
    mostraPergunta();
}

function substituiNome() {
    for(const pergunta of perguntas) {
        pergunta.enunciado = pergunta.enunciado.replace(/você/g, nome);
    }
}
substituiNome();