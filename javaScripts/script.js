    import {aleatorio} from 'aleatorio.js';
    import {perguntas} from 'perguntas.js';

    const caixaPrincipal = document.querySelector(".caixa-principal");
    const caixaPerguntas = document.querySelector(".caixa-perguntas");
    const caixaAlternativas = document.querySelector(".caixa-alternativas");
    const caixaResultado = document.querySelector(".caixa-resultado");
    const textoResultado = document.querySelector(".texto-resultado");
    const botaoJogarNovamente = document.querySelector(".btn-novamente")
    const botaoIniciar = document.querySelector(".iniciar-btn");
    const telaInicial = document.querySelector(".tela-inicial");

    let atual = 0
    let perguntaAtual;
    let historiaFinal = "";

    botaoIniciar.addEventListener('click', iniciaJogo);

    function iniciaJogo () {
        atual = 0
        historiaFinal = "";
        telaInicial.style.display = 'none';
        caixaPerguntas.classList.remove (".mostrar");
        caixaAlternativas.classList.remove (".mostrar");
        caixaResultado.classList.remove (".mostrar");
        mostraPergunta();
    }

    function mostraPergunta() {
        if(atual >= perguntas.lenght){
            mostraResultado();
            return;
        }
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
        caixaAlternativas.textContent = "";
        mostraAlternativas();
    };

    function mostraAlternativas () {
        for(const alternativa of perguntaAtual.alternativas){
            const botaoAlternativas = document.createElement("button");
            botaoAlternativas.textContent = alternativa.texto;
            botaoAlternativas.addEventListener("click", ()=> respostaSelecionada(alternativa));
            caixaAlternativas.appendChild(botaoAlternativas);
        }
    }

    function respostaSelecionada(opcãoSelecionada) {
        const afirmacoes = aleatorio(opcãoSelecionada.afirmacao);
        historiaFinal += afirmacoes + " ";
        if(opcãoSelecionada.proxima !== undefined) {
            atual = opcãoSelecionada.proxima;
        }else {
            mostraResultado();
            return;
        }
        mostraPergunta();
    }

    function mostraResultado () {
        caixaPerguntas.textContent = `Texto genérico, mudar de acordo com as perguntas, ${nome}`;
        textoResultado.textContent = historiaFinal;
        caixaAlternativas.textContent = "";
        caixaResultado.classList.add(".mostrar");
        botaoJogarNovamente.addEventListener("click", jogarNovamente);
    }

    function jogarNovamente () {
        atual = 0;
        historiaFinal = "";
        caixaResultado.classList.remove("mostar");
        mostraPergunta();
    }

    function substituiNome () {
        for(const pergunta of perguntas) {
            pergunta.enunciado = pergunta.enunciado.replace(/você/g, nome);
        }
    }
    substituiNome();