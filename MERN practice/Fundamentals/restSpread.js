const animals = ['cat', 'dog', 'fish', 'horse'];
const [firstAnimal, secondAnimal] = animals;

console.log(animals);
console.log(firstAnimal);

// capture the REST of the data set with ...
const [animalOne, animalTwo, ...otherAnimals] = animals;
console.log(otherAnimals);

const person = {
    firstName: 'Jason',
    lastName: 'Tatum',
    email: 'tatum@celtics.com',
    password: 'deuce0',
    addresses: [
        {
            address: '1 Boston Lane',
            city: 'Boston',
            state: 'MA'
        },
        {
            address: '0 Three Point Arc',
            city: 'Durham',
            state: 'NC'
        }
    ],
    createdAt: 12122023
};

const {firstName, lastName, ...attributes} = person;
console.log(attributes);