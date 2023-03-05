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

// console.log(danoWarrior(warrior));

// Crie uma função que retorne um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disso, a função deve ter uma condicional: caso o mago tenha menos de 15 de mana, o valor de dano recebe uma mensagem (Ex: “Não possui mana suficiente”), e a mana gasta é 0.

const mageDano = (mage) => {
  const danoMin = mage.intelligence;
  const danoMax = danoMin * 2;
  let mageDamage = Math.floor(Math.random() * (danoMax - danoMin) + danoMin);
  let manaMage = mage.mana;
  const manaConsumo = {
    gastoMana: 0,
    damage: 'Nao possui mana suficiente',
  }
  if (manaMage > 15) {
    manaConsumo.gastoMana = 15;
    manaConsumo.damage = mageDamage;
    return manaConsumo
  }
  return manaConsumo;
}

// Parte II
// Agora que você já possui a implementação das funções relativas aos três exercícios anteriores, passe-as como parâmetro para outras funções que irão compor um objeto gameActions. O objeto será composto por ações do jogo, e cada ação é por definição uma HOF, pois, nesse caso, são funções que recebem como parâmetro outra função.

const gameActions = {
  warriorTurn: (danoWarrior) => {
    const warriorDamage = danoWarrior(warrior);
    dragon.healthPoints -= warriorDamage;
    warrior.damage = warriorDamage;
  },
  mageTurn: (mageDano) => {
    const mageTurnStats = mageDano(mage);
    const mageDamage = mageTurnStats.damage;
    mage.mana -= mageTurnStats.gastoMana;
    dragon.healthPoints -= mageDamage;
    mage.damage = mageDamage;
  },
  dragonTurn: (danoDragao) => {
    const dragonDamage = danoDragao(dragon);
    mage.healthPoints -= dragonDamage;
    warrior.healthPoints -= dragonDamage;
    dragon.damage = dragonDamage;
  },
  turnResults: () => battleMembers,
};

gameActions.warriorTurn(danoWarrior);
gameActions.mageTurn(mageDano);
gameActions.dragonTurn(danoDragao);
console.log(gameActions.turnResults());

