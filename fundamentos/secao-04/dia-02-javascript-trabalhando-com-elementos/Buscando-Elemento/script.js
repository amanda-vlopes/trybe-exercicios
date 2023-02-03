// Acesse o elemento elementoOndeVoceEsta.

const elemento = document.getElementById('elementoOndeVoceEsta');

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.

const pai = elemento.parentElement;
pai.style.color = 'red';

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?

const filhoDoFilho1 = document.getElementById('primeiroFilhoDoFilho');
filhoDoFilho1.innerText = 'Olá a todos!';

// Acesse o primeiroFilho a partir de pai.

const primeiroFilho = pai.firstElementChild;

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.

const primeiroFilho2 = elemento.previousElementSibling;


// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.

const texto = elemento.nextSibling;


// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.

const terceiroFilho = elemento.nextElementSibling;

// Agora acesse o terceiroFilho a partir de pai.

const terceiroFilho2 = pai.lastElementChild.previousElementSibling;