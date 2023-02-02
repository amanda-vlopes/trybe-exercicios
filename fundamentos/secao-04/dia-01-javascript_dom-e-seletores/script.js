const header = document.getElementById('header-container');
header.style.backgroundColor ='green'

const body = document.getElementById('container');
body.style.backgroundColor = 'rgb(192,192,192)';

const emergencyTask = document.getElementsByClassName('emergency-tasks');
emergencyTask[0].style.backgroundColor = 'rgb(255,160,122)';

const urgenteOuNao = document.querySelectorAll('.emergency-tasks h3');

for (let index = 0; index < urgenteOuNao.length; index += 1) {
    urgenteOuNao[index].style.backgroundColor = 'rgb(139,0,139)';
}

const noEmergencyTask = document.getElementsByClassName('no-emergency-tasks');
noEmergencyTask[0].style.backgroundColor = 'rgb(240,230,140)';

const importanteOuNao = document.querySelectorAll('.no-emergency-tasks h3');

for (let index = 0; index < importanteOuNao.length; index += 1) {
    importanteOuNao[index].style.backgroundColor = 'rgb(28,28,28)';
};

const footer = document.getElementById('footer-container');
footer.style.backgroundColor = 'rgb(47,79,79)';



