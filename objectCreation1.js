let dog = {
	sound: 'woof',
	talk: function() {
		console.log(this.sound);
	}
};

dog.talk(); // "woof"

// - - - - - - - - - - - - - - - - - - -

let talkFunction = dog.talk;
talkFunction(); // undefined

// - - - - - - - - - - - - - - - - - - -

// note you can assign a function to a
// variable, because it is both a
// functional programming language AND
// object oriented.

// when we call talkFunction(); on line 13
// there is no 'this' !!!
// there is no dog object to invoke 'this'

// See the in line view to understand this
// better:

/*let talkFunction = function() {
	console.log(this.sound);
};
talkFunction();*/ // undefined

// - - - - - - - - - - - - - - - - - -

// to solve this problem bind the function
// to the dog object
let talkFuntion  = dog.talk;
let boundFuntion = talkFuntion.bind(dog);
boundFuntion(); // "woof"

// SO WHEN YOU WANT TO ASSIGN A METHOD TO A VARIABLE YOU MUST '.bind(object)' THAT METHOD TO THE object.
