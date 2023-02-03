// Crie um irmão para elementoOndeVoceEsta.

const pai = document.getElementById('pai');

const irmaoElementoOndeVoceEsta = document.createElement('section');

irmaoElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta';

pai.appendChild(irmaoElementoOndeVoceEsta);

// Crie um filho para elementoOndeVoceEsta.


const filhoElementoOndeVoceEsta = document.createElement('section');

filhoElementoOndeVoceEsta.id = 'filhoElementoOndeVoceEsta';

irmaoElementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);

// Crie um filho para primeiroFilhoDoFilho.

const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');

const filhote = document.createElement('p');

filhote.id = 'filhote';

primeiroFilhoDoFilho.appendChild(filhote);

// A partir desse filho criado, acesse terceiroFilho.

const terceiroFilho = filhote.parentElement.parentElement.nextElementSibling;