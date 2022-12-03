const animals = ['cat', 'dog', 'fish', 'horse'];
const [firstAnimal, secondAnimal] = animals;

console.log(animals);
console.log(firstAnimal);

// capture the REST of the data set with ...
const [animalOne, animalTwo, ...otherAnimals] = animals;
console.log(otherAnimals);