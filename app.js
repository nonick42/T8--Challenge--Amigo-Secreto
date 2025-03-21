let listaDeAmigos = [];
let campoDeInput = document.querySelector('.input-name');
let campoComListaDeAmigos = document.querySelector('.name-list');
let campoDoResultado = document.querySelector('.result-list');

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

function atualizarListaDeAmigos() {
    //Define o valor de campoComListaDeAmigos como 'vazio'.
    campoComListaDeAmigos.innerHTML = '';
    //percorre a listaDeAmigos a cada interação com a função e começa uma arrow function.
    listaDeAmigos.forEach((novoAmigo) => {
        //guarda li como um elemento LI em HTML.
        let li = document.createElement('li');
        //Atribui o valor da var novoAmigo no elemento li.
        li.textContent = novoAmigo;
        //pega no campoComListaDeAmigos
        campoComListaDeAmigos.appendChild(li)
    })
}

function sortearAmigo() {
    if (listaDeAmigos < 2) {
        alert('Por favor, insira mais de 3 nomes antes de fazer o sorteio!')
    } else {
        let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
        let amigoSorteado = listaDeAmigos[indiceAleatorio];
        exibirNomeSorteado(amigoSorteado);

        //DEBUG
        console.log(amigoSorteado);
    }
}

function exibirNomeSorteado(nomeASerExibido) {
    campoDoResultado.innerHTML = `<li>Seu amigo secreto é o(a) ${nomeASerExibido}!`
}
