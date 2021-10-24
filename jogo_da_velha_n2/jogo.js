var jogada = 0;

function jogar(itemClicado) {
    if (itemClicado.textContent.length > 0) {
        alert('Não pode');
    } else {
        itemClicado.appendChild(criaTexto(jogadorVez()));
        jogada++;
        verificarVencedor();
    }
}


function criaTexto(texto) {
    return document.createTextNode(texto);
}

function jogadorVez() {
    return jogada % 2 === 0 ? 'X' : 'O';
}

function verificarVencedor() {
    const vencedor = verificarHorizontal();
    const vencedorColuna = verificarVertical();
    if (vencedor !== '-' || vencedorColuna !== '-') {
        alert(`O jogador ${vencedor}`);
    }
}

function verificarHorizontal() {
    const linhas = document.getElementsByClassName('linha');
    const linhaVencedora = Array.from(linhas).find((linha) => {
        const colunas = linha.children;
        const xVencedor = verificarLinhaCompleta('X', colunas);
        const oVencedor = verificarLinhaCompleta('O', colunas);
        return xVencedor || oVencedor;
    });

    if (linhaVencedora) {
        const jogadorVencedor = linhaVencedora.children[0].textContent
        return jogadorVencedor;
    }

    return '-';

}

function verificarLinhaCompleta(nomeJogador, colunas) {
    return Array.from(colunas).every(coluna => coluna.textContent === nomeJogador);
}

function verificarVertical(){
    const colunas = document.getElementsByClassName('coluna')
    const colunaVencedora = Array.from(colunas).find((coluna) =>{
        const colunaQuadrado = coluna.children;
        const xVencedor = verificarLinhaCompleta('X',colunaQuadrado);
        const oVencedor = verificarLinhaCompleta('O',colunaQuadrado);
        return xVencedor || oVencedor;
    });
    if(colunaVencedora){
        const jogadorVencedor = colunaVencedora.children[0].textContent
        return jogadorVencedor;
    }
    return '-';

}



