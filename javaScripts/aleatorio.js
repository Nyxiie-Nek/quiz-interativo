const nomes = ["não esquece a PORRA DOS NOMES CARALHO", "seu BURRO"]

export function aleatorio(lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)