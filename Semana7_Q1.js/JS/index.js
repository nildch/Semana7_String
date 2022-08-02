let palavra = prompt('Quantas vezes a palavra será exibida?')
let mensagem = prompt('Digite a mensagem a ser exibida: ')

function createList(palavra, mensagem) {
  let i = 0;
  let ul = document.querySelector('ul');

  while (i < palavra ) {
    var lista = document.createElement('li');
    var msg = document.createTextNode(mensagem);

    lista.appendChild(msg);
    ul.appendChild(lista);
    https://getbootstrap.com/docs/4.0/components/buttons/
    i++;
  }
}
createList(palavra, mensagem);