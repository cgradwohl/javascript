'use strict';
const animals = [
	{name: 'fred', species: 'dog'},
	{name: 'mike', species: 'bird'},
	{name: 'steve', species: 'bird'},
	{name: 'ringo', species: 'bird'}
];

/*let birdNames = animals.filter(function(animal) {
	return animal.species === 'bird';
});*/

let birdNames = animals.map(animal => animal.name);
console.log('bird names', birdNames , '\n');
