// parentNode : retorna o nó pai.
// parentElement : retorna o elemento pai.
// childNodes : retorna um NodeList com todos os nós filhos.
// children : retorna um HTMLCollection com todos os elementos filhos.
// firstChild : retorna o primeiro nó filho.
// firstElementChild : retorna o primeiro elemento filho.
// lastChild : retorna o último nó filho.
// lastElementChild : retorna o último elemento filho.
// nextSibling : retorna o próximo nó.
//previousElementSibling: A propriedade previousElementSibling retorna o elemento anterior do elemento especificado, no mesmo nível de árvore.


// Acesse o elemento elementoOndeVoceEsta 
// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a el
// Acesse o primeiroFilhoDoFilho e adicione um texto a ele
// Acesse o primeiroFilho a partir de pai
// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta
// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta
// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta
// Agora acesse o terceiroFilho a partir de pai

const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
//no console: document.getElementById('elementoOndeVoceEsta')

const pai = elementoOndeVoceEsta.parentElement;
pai.style.color = 'red';
//no console: document.getElementById('elementoOndeVoceEsta').parentElement.style.color = 'red';

const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = 'Adicionando um texto ao primeiro filho do filho';
//no console: document.getElementById('elementoOndeVoceEsta').firstElementChild.innerText = 'Adicionando um texto ao primeiro filho do filho'

const primeiroFilho = pai.firstElementChild;
//no console: document.getElementById('elementoOndeVoceEsta').firstElementChild

const primeiroFilho1 = elementoOndeVoceEsta.previousElementSibling;
//no console: document.getElementById('elementoOndeVoceEsta').previousElementSibling

const textElement = elementoOndeVoceEsta.nextSibling;
//no console: document.getElementById('elementoOndeVoceEsta').nextSibling

const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;
//no console: document.getElementById('elementoOndeVoceEsta').nextElementSibling

const terceiroFilho3 = pai.lastElementChild.previousElementSibling;
//no console: document.getElementById('elementoOndeVoceEsta').parentElement.lastElementChild.previousElementSibling