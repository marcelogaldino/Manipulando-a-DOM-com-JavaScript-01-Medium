/*
    Criamos as variaveis abaixo pois precisamos de certa forma manipular 
    os elementos HTML que inserimos no arquivo index.html
*/
let inputElement = document.getElementById('ipt');
let buttonElement = document.getElementById('btn');
let listElement = document.getElementById('ul');

/*
    A função addItem() cria os itens nossa lista, pegando o valor que foi digitado
    no campo de texto e adiciona como um novo item da lista
*/

function addItem() {
    let getText = inputElement.value;
    let textItem = document.createTextNode(getText);
    let liElement = document.createElement('li');
    let aElement = document.createElement('a');
    
    listElement.appendChild(liElement);
    liElement.appendChild(textItem);

}

/*
    Ao clicar no botão adicionar a função addItem() é chamada para 
    criar um novo item em tela, e em seguida limpamos o campo para
    digitarmos um novo item a ser inserido.
*/

buttonElement.onclick = function() {
    addItem();
    inputElement.value = '';
}

