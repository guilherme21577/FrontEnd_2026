const produtos = {
"123": {"nome":"jorge e matheus", "preco":9.0000},
"456": {"nome":"fala mansa", "preco":3.0000},
"789": {"nome":"sabrina carpintcher", "preco":12.0000},
"147": {"nome":"gaucho da fronteira", "preco":90.5000},
};

let carrinho = [];

const audio = audio("bip.mp3")

window.onload = () => {
    document.getElementById("cod").focus();

}

function addProduto(){
const codHtml = document.getElementById("cod")
const qtdHtml = document.getElementById("qtd")

const valorCod = codHtml.value;
const valorQtd = qtdHtml.value

if(!produtos[valorCod]){
    AlertItem();
    return;
}

const infoProduto = produtos[codHtml];

const item = { 
    nome: infoProduto.nome,
    preco: infoProduto.preco,
    quantidade: valorQtd,
    subtot: infoProduto * valorQtd

};

carrinho.push(item);
audio.currentTime = 0;
audio.play();

atualizarTela();

    qtdHtml.value = 1;
    codHtml.value = "";

}



