/********************
 * HELPER FUNCTIONS *
 ********************/

const makeDino = function(species, period, diet, notExtinct = false) {
  const dino = {
    species: species,
    period: period,
    carnivore: diet,
    extinct: notExtinct
  }
  return dino
}

const makeSingular = function(dino) {
  const newDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct)
  if (dino.species.endsWith('us') === true) {
    newDino.species = newDino.species.slice(0, -2)
  }
  return newDino
}

const truncateSpecies = function(dino) {
  const newDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct)
  if (dino.species.length > 10) {
    newDino.species = newDino.species.substr(0, 7) + '...'
  } 
  return newDino
}

const makeExtinct = function(dino) {
  const newDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct)
  if (!dino.extinct) {
    newDino.extinct = true
  }
  return newDino
}

const isCarnivore = function(dino) {
  const newDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct)
  // if (dino.carnivore) {
    return newDino.carnivore 
  // }
}

const isHerbivore = function(dino) {
  const newDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct)
  if (!dino.carnivore)  
  return newDino
}

const isExtinct = function(dino) {
  const newDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct)
  return newDino.extinct
}

const isTriassic = function(dino) {
  const newDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct)
  if (dino.period === 'Triassic') {
  return true
  } else {
    return false
  }
  return newDino
}

const isJurassic = function(dino) {
  const newDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct)
  if (dino.period === 'Jurassic') {
  return true
  } else {
    return false
  }
  return newDino
}

const isCretaceous = function(dino) {
  const newDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct)
  if (dino.period === 'Cretaceous') {
  return true
  } else {
    return false
  }
  return newDino
}

const isNotExtinct = function (dino) {
  const newDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct);
  if (dino.extinct === false)
  return newDino;
}

const isNotTriassic = function (dino) {
  const newDino = makeDino(dino.species, dino.period, dino.carnivore, dino.extinct);
  if (dino.period === 'Triassic'){
    return false 
  } else {
  return true;
  }
}

/***********************
 * ITERATION FUNCTIONS *
 **********************/

const singularizeDinos = function(dino) {
  return dino.map(makeSingular)
}

const truncateDinos = function(dino) {
  return dino.map(truncateSpecies)
}

const makeAllExtinct = function(dino) {
  return dino.map(makeExtinct)
}

const carnivoresOnly = function(dino) {
  return dino.filter(isCarnivore)
}

const herbivoresOnly = function(dino) {
  return dino.filter(isHerbivore)
}

const extinctOnly = function(dino) {
  return dino.filter(isExtinct)
}

const notExtinct = function(dino) {
  return dino.filter(isNotExtinct)
}

const triassicOnly = function(dino) {
  return dino.filter(isTriassic)
}

const notTriassic = function(dino) {
  return dino.filter(isNotTriassic)
}

/*********************************
 * TEST SETUP CODE - DON'T TOUCH!*
 ********************************/

  if (typeof makeDino === 'undefined') {
    makeDino = undefined
  }

  if (typeof makeSingular === 'undefined') {
    makeSingular = undefined
  }

  if (typeof truncateSpecies === 'undefined') {
    truncateSpecies = undefined
  }

  if (typeof makeExtinct === 'undefined') {
    makeExtinct = undefined
  }

  if (typeof isCarnivore === 'undefined') {
    isCarnivore = undefined
  }

  if (typeof isExtinct === 'undefined') {
    isExtinct = undefined
  }

  if (typeof isNotExtinct === 'undefined') {
    isNotExtinct = undefined
  }

  if (typeof isTriassic === 'undefined') {
    isTriassic = undefined
  }

  if (typeof isJurassic === 'undefined') {
    isJurassic = undefined
  }

  if (typeof isCretaceous === 'undefined') {
    isCretaceous = undefined
  }

  if (typeof singularizeDinos === 'undefined') {
    singularizeDinos = undefined
  }

  if (typeof truncateDinos === 'undefined') {
    truncateDinos = undefined
  }

  if (typeof makeAllExtinct === 'undefined') {
    makeAllExtinct = undefined
  }

  if (typeof carnivoresOnly === 'undefined') {
    carnivoresOnly = undefined
  }

  if (typeof herbivoresOnly === 'undefined') {
    herbivoresOnly = undefined
  }

  if (typeof extinctOnly === 'undefined') {
    extinctOnly = undefined
  }

  if (typeof notExtinct === 'undefined') {
    notExtinct = undefined
  }

  if (typeof triassicOnly === 'undefined') {
    triassicOnly = undefined
  }

  if (typeof notTriassic === 'undefined') {
    notTriassic = undefined
  }


module.exports = {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct,
  isCarnivore,
  isExtinct,
  isNotExtinct,
  isTriassic,
  isJurassic,
  isCretaceous,
  singularizeDinos,
  truncateDinos,
  makeAllExtinct,
  carnivoresOnly,
  herbivoresOnly,
  extinctOnly,
  notExtinct,
  triassicOnly,
  notTriassic,
}
