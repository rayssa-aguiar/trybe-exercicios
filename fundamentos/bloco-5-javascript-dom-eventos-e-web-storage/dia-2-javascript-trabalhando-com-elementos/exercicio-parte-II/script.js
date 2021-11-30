//método  createElement(): cria um Nó de elemento com o nome especificado.

//método  appendChild(): Adiciona um nó ao final da lista de filhos de um nó pai especificado. Se o nó já existir no documento, ele é removido de seu nó pai atual antes de ser adicionado ao novo pai.
//O método appendChild () anexa um nó como o último filho de um nó.

//propriedade  parentElement: parentElement retorna o elemento pai do elemento especificado.


// 1. Crie um irmão para `elementoOndeVoceEsta`.

//acesasar o elemento 'pai' para asim criar uma sessão para armazenar uma identificação chamada 'irmaoElementoOndeVoceEsta', somente à partir daí criar o um irmão para o 'elementoOndeVoceEsta'

let pai = document.getElementById('pai')
let irmaoElementoOndeVoceEsta = document.createAttribute('section')
irmaoElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta'
pai.appendChild('irmaoElementoOndeVoceEsta')

// 2. Crie um filho para `elementoOndeVoceEsta`.

//primeiro é preciso acesasar o elemento pai 'elementoOndeVoceEsta` para asim criar uma sessão para armazenar uma identifiação filho  chamada 'terceiroFilhoDoFilho', somente à partir daí criar o um filho para o 'elementoOndeVoceEsta'

let, elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
let terceiroFilhoDoFilho = document.createElement('section')
terceiroFilhoDoFilho.id = 'terceiroFilhoDoFilho'
elementoOndeVoceEsta.appendChild(terceiroFilhoDoFilho)

// 3. Crie um filho para `primeiroFilhoDoFilho`.

//acesasar o elemento pai 'primeiroFilhoDoFilho' para asim criar uma sessão para armazenar uma identificação filho chamado 'filhoPrimeiroFilhoDoFilho', somente à partir daí criar o filho do  'primeiroFilhoDoFilho'

let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho')
let filhoPrimeiroFilhoDoFilho = document.createElement('section')
filhoPrimeiroFilhoDoFilho.id = 'filhoPrimeiroFilhoDoFilho'
primeiroFilhoDoFilho.appendChild(filhoPrimeiroFilhoDoFilho)

// 4. A partir desse filho criado, acesse `terceiroFilho`.

//