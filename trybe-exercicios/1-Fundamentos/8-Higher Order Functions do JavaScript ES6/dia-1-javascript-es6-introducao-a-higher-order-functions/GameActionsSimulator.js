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

  const danoDoDragao = (dragon) => {
  return Math.floor(Math.random() * dragon.strength) +15;
  };

  const danoDoWarrior = (warrior) => {
  return Math.floor(Math.random() * (warrior.strength*warrior.weaponDmg)) + warrior.strength;
  };

  const danoDoMago = (intelligence) => {
  const mana = mage.mana;
  
  const status = {
    gastoDeMana: 0,
    dano: 'Não possui mana suficiente'
  }
  if (mana >= 15) {
  const dano = Math.floor(Math.random() * (intelligence*2)) +intelligence;
  status.gastoDeMana = 15;
  status.dano = dano;
  return status;
  }
  return status;
  };

  const gameActions = {
      turnoWarrior: (danoDoWarrior) => {
        const danoDoWarrior = danoDoWarrior(warrior)
        warrior.damage = danoDoWarrior;
        dragon.healthPoints -= danoDoWarrior;
      },
      turnoMago: (danoDoMago) => {
      const mageStatus = danoDoMago(mage);
      const danoDoMago = mageStatus.dano;
      mage.damage = danoDoMago;
      mage.mana -= mageStatus.mana;
      dragon.healthPoints -= danoDoMago;
      },
      
  }