// Recuperando elementos

// TAGS HTML
const body = document.querySelector('body');
const main = document.getElementsByTagName('main')[0];

// Botão cor de fundo

const white = document.getElementById('white');
const black = document.getElementById('black');
const green = document.getElementById('green');
const blue = document.getElementById('blue');
const yellow = document.getElementById('yellow');

// Botão cor da fonte

const blackFont = document.getElementById('black-font');
const redFont = document.getElementById('red-font');
const whiteFont = document.getElementById('white-font');

// Botão tamanho da fonte

const font8 = document.getElementById('font8');
const font10 = document.getElementById('font10');
const font12 = document.getElementById('font12');
const font14 = document.getElementById('font14');
const font20 = document.getElementById('font20');

// Botão espaçamento linhas 

const line1 = document.getElementById('line1');
const lineNormal = document.getElementById('line-normal');
const line1eMeio = document.getElementById('line1.5');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');

// Botão tipo da fonte

const arial = document.getElementById('arial');
const times = document.getElementById('times');

// Adicionando função de alterar cor de fundo

white.addEventListener('click', () => {
  if (body.style.backgroundColor !== 'white') {
    body.style.backgroundColor = 'white';
  }
  const corDeFundo = body.style.backgroundColor;
  localStorage.setItem('corDeFundo', JSON.stringify(corDeFundo));
})

black.addEventListener('click', () => {
  if (body.style.backgroundColor !== 'black') {
    body.style.backgroundColor = 'black';
  }
  const corDeFundo = body.style.backgroundColor;
  localStorage.setItem('corDeFundo', JSON.stringify(corDeFundo));
});

green.addEventListener('click', () => {
  if (body.style.backgroundColor !== 'green') {
    body.style.backgroundColor = 'green';
  }
  const corDeFundo = body.style.backgroundColor;
  localStorage.setItem('corDeFundo', JSON.stringify(corDeFundo));
});

blue.addEventListener('click', () => {
  if (body.style.backgroundColor !== 'blue') {
    body.style.backgroundColor = 'blue';
  }
  const corDeFundo = body.style.backgroundColor;
  localStorage.setItem('corDeFundo', JSON.stringify(corDeFundo));
});

yellow.addEventListener('click', () => {
  if (body.style.backgroundColor !== 'yellow') {
    body.style.backgroundColor = 'yellow';
  }
  const corDeFundo = body.style.backgroundColor;
  localStorage.setItem('corDeFundo', JSON.stringify(corDeFundo));
});

// Recuperando cor de fundo ao recarregar a pagina

const corDeFundo = JSON.parse(localStorage.getItem('corDeFundo'));

const alterandoCorFundo = () => {
  if (corDeFundo !== null) {
    body.style.backgroundColor = corDeFundo;
  }
}

// Adicionando função de alterar cor da fonte

blackFont.addEventListener('click', () => {
  if (main.style.color !== 'black') {
    main.style.color = 'black';
  }
  const corDaFonte = main.style.color;
  localStorage.setItem('corDaFonte', JSON.stringify(corDaFonte));
});

redFont.addEventListener('click', () => {
  if (main.style.color !== 'red') {
    main.style.color = 'red';
  }
  const corDaFonte = main.style.color;
  localStorage.setItem('corDaFonte', JSON.stringify(corDaFonte));
});

whiteFont.addEventListener('click', () => {
  if (main.style.color !== 'white') {
    main.style.color = 'white';
  }
  const corDaFonte = main.style.color;
  localStorage.setItem('corDaFonte', JSON.stringify(corDaFonte));
});

// Recuperando cor da fonte ao recarregar a pagina

const corDaFonte = JSON.parse(localStorage.getItem('corDaFonte'));

const alterandoCorFonte = () => {
  if (corDaFonte !== null) {
    main.style.color = corDaFonte;
  }
};

// Adicionando função de alterar tamanho da fonte

font8.addEventListener('click', () => {
  if (main.style.fontSize !== '8px') {
    main.style.fontSize = '8px'
  }
  const tamanhoDaFonte = main.style.fontSize;
  localStorage.setItem('tamanhoDaFonte', JSON.stringify(tamanhoDaFonte));
});

font10.addEventListener('click', () => {
  if (main.style.fontSize !== '10px') {
    main.style.fontSize = '10px'
  }
  const tamanhoDaFonte = main.style.fontSize;
  localStorage.setItem('tamanhoDaFonte', JSON.stringify(tamanhoDaFonte));
});

font12.addEventListener('click', () => {
  if (main.style.fontSize !== '12px') {
    main.style.fontSize = '12px'
  }
  const tamanhoDaFonte = main.style.fontSize;
  localStorage.setItem('tamanhoDaFonte', JSON.stringify(tamanhoDaFonte));
});

font14.addEventListener('click', () => {
  if (main.style.fontSize !== '14px') {
    main.style.fontSize = '14px'
  }
  const tamanhoDaFonte = main.style.fontSize;
  localStorage.setItem('tamanhoDaFonte', JSON.stringify(tamanhoDaFonte));
});

font20.addEventListener('click', () => {
  if (main.style.fontSize !== '20px') {
    main.style.fontSize = '20px'
  }
  const tamanhoDaFonte = main.style.fontSize;
  localStorage.setItem('tamanhoDaFonte', JSON.stringify(tamanhoDaFonte));
});

// Recuperando cor da fonte ao recarregar a pagina

const tamanhoDaFonte = JSON.parse(localStorage.getItem('tamanhoDaFonte'));

const alterandoTamanhoFonte = () => {
  if (tamanhoDaFonte !== null) {
    main.style.fontSize = tamanhoDaFonte;
  }
};

// Adicionando função de alterar espaçamento linhas

line1.addEventListener('click', () => {
  if (main.style.lineHeight !== '1') {
    main.style.lineHeight = '1';
  }
  const espacoLinhas = main.style.lineHeight;
  localStorage.setItem('espacoLinhas', JSON.stringify(espacoLinhas));
});

lineNormal.addEventListener('click', () => {
  if (main.style.lineHeight !== 'normal') {
    main.style.lineHeight = 'normal';
  }
  const espacoLinhas = main.style.lineHeight;
  localStorage.setItem('espacoLinhas', JSON.stringify(espacoLinhas));
});

line1eMeio.addEventListener('click', () => {
  if (main.style.lineHeight !== '1.5') {
    main.style.lineHeight = '1.5';
  }
  const espacoLinhas = main.style.lineHeight;
  localStorage.setItem('espacoLinhas', JSON.stringify(espacoLinhas));
});

line2.addEventListener('click', () => {
  if (main.style.lineHeight !== '2') {
    main.style.lineHeight = '2';
  }
  const espacoLinhas = main.style.lineHeight;
  localStorage.setItem('espacoLinhas', JSON.stringify(espacoLinhas));
});

line3.addEventListener('click', () => {
  if (main.style.lineHeight !== '3') {
    main.style.lineHeight = '3';
  }
  const espacoLinhas = main.style.lineHeight;
  localStorage.setItem('espacoLinhas', JSON.stringify(espacoLinhas));
});

// Recuperando espaçamento linhas ao recarregar a pagina

const espacoLinhas = JSON.parse(localStorage.getItem('espacoLinhas'));

const alterandoEspacoLinhas = () => {
  if (espacoLinhas !== null) {
    main.style.lineHeight = espacoLinhas;
  }
};

// Adicionando função de alterar tipo da fonte

arial.addEventListener('click', () => {
  if (main.style.fontFamily !== 'Arial') {
    main.style.fontFamily = 'Arial';
  }
  const fontFamily = main.style.fontFamily;
  localStorage.setItem('fontFamily', JSON.stringify(fontFamily));
});

times.addEventListener('click', () => {
  if (main.style.fontFamily !== 'Times New Roman') {
    main.style.fontFamily = 'Times New Roman';
  }
  const fontFamily = main.style.fontFamily;
  localStorage.setItem('fontFamily', JSON.stringify(fontFamily));
});

// Recuperando fontFamily

const fontFamily = JSON.parse(localStorage.getItem('fontFamily'));

const alterandoFontFamily = () => {
  if (fontFamily !== null) {
    main.style.fontFamily = fontFamily;
  }
};

window.onload = () => {
  alterandoCorFundo();
  alterandoCorFonte();
  alterandoTamanhoFonte();
  alterandoEspacoLinhas();
  alterandoFontFamily();
}