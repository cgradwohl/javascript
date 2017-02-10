// in es5 there is only function scope

// so if var is not inside a function
// then it is considered global
/*for ( var i = 0; i<10; i++ ){
    console.log(i);
}
console.log('after loop', i);*/ // <== 10

//  -   -   -   -   -   -   -   -   -   -   -

// if var IS part of a function then
// then var is bounded to this functions
// scope
/*function counter(){
    for ( var i = 0; i<10; i++ ){
        console.log(i);
    }
    console.log('after loop', i);
};
counter();
console.log(i); */// <== ReferenceError: i is not defined

//  -   -   -   -   -   -   -   -   -   -   -

// so in order to remove global polution
// we wrap things inside functions, here
// is the same example above using an
// iife
/*(function counter(){
    for ( var i = 0; i<10; i++ ){
        console.log(i);
    }
    console.log('after loop', i);
})();
console.log(i);*/// <== ReferenceError: i is not defined, Global scope not poluted

// javascript variables are hoisted
// so the interpreter declares var
// at the top of the function scope
// that the variable was called in
/*(function counter(){
    var i;
    for ( i = 0; i<10; i++ ){
        console.log(i);
    }
    console.log('after loop', i);
})();
console.log(i);*/

//  -   -   -   -   -   -   -   -   -   -   -

// javascript variables are hoisted
// this means that it takes all variables
// within the function scope and hoists them
// to the top of the function

// A HORRIBLE SIDE EFFECT OF THIS:
// YOU FORGET TO DECLARE THE VAR !!!
// so you thought you where protecfting the
// global scope but you actually pollutted it!!
/*(function counter(){
    for ( i = 0; i<10; i++ ){
        console.log(i);
    }
    console.log('after loop', i);
})();
console.log(i);*///<== 10, global scope polluted


// what this means is that the variable
// has now been declared at the highest
// level function call, which here is the
// global window object

/*var i; //<== interpreter declares var here :(
(function counter(){
    for ( i = 0; i<10; i++ ){
        console.log(i);
    }
    console.log('after loop', i);
})();
console.log(i);*/

//  -   -   -   -   -   -   -   -   -   -   -

// one way to prevent this disaster is
// to not forget to declare variables.

// an even better approach is to
// is to use the 'use strict' statement
// at the top of your code. the if the interpreeter
// tries to declare a var abouve this 'use strict'
// statement then it will throw an error.

// without 'use strict';
/*(function counter(){
    for ( i = 0; i<10; i++ ){
        console.log(i);
    }
    console.log('after loop', i);
})();
console.log(i); *///<== global scope polutted


// with 'use strict';
/*'use strict';
(function counter(){
    for ( i = 0; i<10; i++ ){
        console.log(i);
    }
    console.log('after loop', i);
})();
console.log(i);*/ // <== ReferenceError: i is not defined

//  -   -   -   -   -   -   -   -   -   -   -

// Now, you can still polute the gloabl
// scope with use strict

// below the 'i' is REASSIGNED to i=0,
// and since 'i' is global to counter()
// this is ok
/*'use strict';
var i = 999999999;
(function counter(){
    for ( i = 0; i<10; i++ ){
        console.log(i);
    }
    console.log('after loop', i);
})();
console.log('after function', i);*/ //<== 10 , global scope polutted


// here the global space is still
// polutted one beacuse var i is global.
// even though we declared var again on line 145
// that declaration will be hoisted to the top
// of the function call which will have a global value of 999999999
/*'use strict';
var i = 999999999;
(function counter(){
    for ( i = 0; i<10; i++ ){
        console.log(i);
    }
    console.log('after loop', i);
    var i;
})();
console.log('after function', i);*///<== 999999999


//  -   -   -   -   -   -   -   -   -   -   -
// ==>   let

// let introduces blocked scope to javascript
// let has blocked scope :)
// var has function scope :(
/*for ( let i = 0; i<10; i++ ){
	console.log(i);
}
console.log(i);*/ //<== ReferenceError: i is not defined

// let is the new var :)

// conclusion: let is a variable with blocked scope, and let variables are mutable

//  -   -   -   -   -   -   -   -   -   -   -
// ==>   const

// const is also a blocked scope variable but it is
// immutable!
/*'use strict';
(function counter(){
	for ( const i = 0; i<10; i++ ){//<== const objects are immutable! But still blocked scope
		console.log(i);
	}
	console.log('after loop', i);//<== therefore i is undefined
})();
console.log('after function', i);*/// <== still undefined

/*'use strict';
(function counter(){
	for ( let i = 0; i<10; i++ ){//<== let objects are mutable! but still blocked scope
		console.log(i);
	}
	console.log('after loop', i);//<== therefore i is undefined, blocked scope
})();
console.log('after function', i);*///<== therefore i is undefined, blocked scope


//  -   -   -   -   -   -   -   -   -   -   -


// const immutable blocked scope variable
// MINIMIZE MUTABLE STATE 
