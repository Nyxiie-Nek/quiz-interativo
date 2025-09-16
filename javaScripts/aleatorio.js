const nomes = ["Saiko", "Ycaro", "Meia Um", "Raposito", "Gemaplys", "Felps", "Cellbit", "Alanzoka", "Jean", "Goularte", "Polar"]

export function aleatorio(lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);