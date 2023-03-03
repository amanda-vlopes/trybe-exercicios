// Exercicios bonus seção 7.1

// Parte 1

const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// Crie uma função que retorne o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).

const danoDragao = (dragon) => {
  let dragonDamage = Math.floor(Math.random() * (dragon.strength - 15) + 15);
  
  return dragonDamage;
};

// console.log(danoDragao(dragon));

// Crie uma função que retorne o dano causado pelo warrior.
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).

const danoWarrior = (warrior) => {
  const danoMin = warrior.strength;
  const danoMax = warrior.strength * warrior.weaponDmg;
  const warriorDamage = Math.floor(Math.random() * (danoMax - danoMin) + danoMin);

  return warriorDamage;
};

console.log(danoWarrior(warrior));