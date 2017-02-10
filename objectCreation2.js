// an upper case function name is
// convention for a class in javascript
function Dog(sound){
	this.sound = sound;
	this.talk = function() {
		console.log(this.sound);
	};
}

// now to create an object we use
// the 'new' keyword
var max = new Dog('grrr');
max.talk(); // ==> "grrr"

var taco = new Dog('meow');
taco.talk(); // ==> "meow"

// note failing to use the new keyword
// will pollute the global namespace:
// var zac = Dog('duuh');
// zac.talk();

// WHEN USING CLASSES YOU MUST USE THE 'new' KEYWORD
