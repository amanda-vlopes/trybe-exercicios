// Adicione a tag h1 com o texto TrybeTrip - Agência de Viagens como filho da tag body;

// const body = document.getElementsByTagName('body');

const textoH1 = document.createElement('h1');
textoH1.innerText = 'TrybeTrip - Agência de Viagens';

document.body.appendChild(textoH1);

// Adicione a tag main com a classe main-content como filho da tag body;

const principal = document.createElement('main');
principal.className = 'main-content';

document.body.appendChild(principal);

// Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

const section = document.createElement('section');
section.className = 'center-content';

principal.appendChild(section);

// Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;

const paragrafo = document.createElement('p');
paragrafo.innerText = 'Exercicio trabalhando com elementos dia 2 seção 4 Trybe';
section.appendChild(paragrafo);

// Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;

const sectionLeft = document.createElement('section');
sectionLeft.className = 'left-content';
principal.appendChild(sectionLeft);

// Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;

const sectionRight = document.createElement('section');
sectionRight.className = 'right-content';
principal.appendChild(sectionRight);

// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;

const img1 = document.createElement('img');
img1.src = 'https://picsum.photos/200';
img1.className = 'small-image';
sectionLeft.appendChild(img1);

// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, … como valores da lista. Essa lista deve ser filha do section criado no passo 6;

const lista1 = document.createElement('ul');
lista1.className = 'lista-valores';
sectionRight.appendChild(lista1);

let itensLista = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];

for (let index = 0; index < itensLista.length; index += 1) {
    let numero = itensLista[index];

    let numeroLista1 = document.createElement('li');
    numeroLista1.innerText = numero;

    lista1.appendChild(numeroLista1);
};


// Adicione 3 tags h3, todas sendo filhas do main criado no passo 2

const tag1 = document.createElement('h3');

const tag2 = document.createElement('h3');

const tag3 = document.createElement('h3');

principal.appendChild(tag1);
principal.appendChild(tag2);
principal.appendChild(tag3);


// Adicione a classe title na tag h1 criada;

textoH1.className = 'title';

// Adicione a classe description nas 3 tags h3 criadas;

const elementoH3 = document.getElementsByTagName('h3');

for (index = 0; index < elementoH3.length; index += 1) {
    elementoH3[index].className = 'description';
}

// Remova a section criada no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();

principal.removeChild(sectionLeft);


// Centralize a section criada no passo 6 (aquele que possui a classe right-content).

sectionRight.style.marginRight = 'auto';


// Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;

section.style.backgroundColor = 'green';

// Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.

const item = document.getElementsByTagName('ul')[0];
item.lastChild.remove();
item.lastChild.remove();