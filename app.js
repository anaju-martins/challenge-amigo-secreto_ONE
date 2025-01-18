let listaAmigos = document.getElementById('listaAmigos');
let resultado = document.getElementById('resultado');
let amigos = [];

function adicionarAmigo(){
    let amigo = document.getElementById('amigo').value;
    if (amigo == ''){
        alert("Por favor, insira um nome");

    } else {
        amigos.push(amigo);
        let novoAmigo = document.createElement('li'); // cria elemento da lista no HTML para colocar os nomes 
        novoAmigo.textContent = amigo; //elemento da lista recebe o nome do amigo inserido
        listaAmigos.appendChild(novoAmigo); //adiciona o novo amigo na lista de amigos na página
        limparCampo(); 
            
    }
    resultado.textContent = ''; //limpando o resultado para fazer novo sorteio
    
}

function sortearAmigo(){
    if (amigos.length == 0){
        alert("Insira nomes antes de sortear");
        resultado.textContent = '';

    } else {
        let indice = Math.floor(Math.random()* amigos.length); //vai sortear um numero de acordo com o tamanho da lista
        let item = document.createElement('li'); //cria elemento da lista do resultado 
        item.textContent = 'O amigo sorteado é: ' + amigos[indice]; // elemento da lista vai dizer qual foi o amigo, de acordo com o índice sorteado 
        resultado.appendChild(item); //adicionando o amigo sorteado na lista 
    }
    amigos = [];
    limparCampo();
    listaAmigos.textContent = ''; //limpando a lista de amigos 
}

function limparCampo(){
    amigo = document.getElementById('amigo');
    amigo.value = '';

}
