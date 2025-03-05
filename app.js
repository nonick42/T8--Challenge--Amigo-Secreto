let listaDeAmigos = [];
let  = document.querySelector('.input-name');
let campoComListaDeAmigos = document.querySelector('.name-list');

function adicionarAmigo() {
    if (campoDeInput.value === '') {
        //Melhorar essa mensagem.
        alert('Por favor, insira um nome válido!');
    } else {
        //guarda o nome digitado na var.
        let nomeCapturado = campoDeInput.value;
        //seleciona a lista de amigos e sobe o nomeCapturado como parametro.
        listaDeAmigos.push(nomeCapturado);
        //adiciona o novo nome a lista de amigos no HTML.
        atualizarListaDeAmigos();
        //seleciona o campo de texto e o limpa no final da função.
        campoDeInput.value = '';


        //DEBUG
        console.log(listaDeAmigos);
    }

}

