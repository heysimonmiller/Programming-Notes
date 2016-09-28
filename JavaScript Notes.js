JAVASCRIPT NOTES
Code runs from top to bottom, from inside to out. So first line, then second line etc. Inside the brackets, then outside the brackets.
clear() // very useful when testing code in the console.
----------------
	HOW TO PRINT
----------------
function print(message) {
  var div = document.getElementById('output');
  div.innerHTML = message;
}

-------------
	VARIABLES
-------------

Variable names:
-	can't start with a number
- CAN start with a $ (dollar sign) or _ (underscore)
-	can only contain letters, numbers, dollar sign, underscore
- use descriptive names e.g.:
var score = 0; 							NOT var t = 0;
var playerOne = "Michael"; 	NOT var n1 = "Michael";
var pricePerPound = 10; 		NOT var p = 10;
When you come back six months later, it's hard to remember what var t = 0 is.

message = message + 'Welcome to RSA'; 
is the same as
message += 'Welcome to RSA';

var blob = 1 //this stores the variable 'blob' as a number.
var car = "1" // this stores the variable 'car' as the string/letters '1'.

-----------
	NUMBERS
-----------
var HTMLbadges = parseInt(HTMLBadges); // parseInt changes the string HTMLBadges into an integer.
parseInt = change to integer. // will only give you an integer part back. For example:
parseInt(205.22); // will give you 205
----
parseFloat = change to floating number. Can detect numbers in a string (if the number is first) For example:
parseFloat('Hello 25 year old'); // will give you NaN (Not a Number)
parseFloat(252 Year old building); // will give you 252.

------------
	Objects:
------------
------------------------------------------------------------------------------------------------
	Maths: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
------------------------------------------------------------------------------------------------

Math.floor(1.6) // will return 1 (floor rounds DOWN)
Math.ceil(1.3) // will return 2 (ceil rounds UP - ceiling)

To get a number from 1-6 (dice) we use:
Math.floor( Math.random() * 6 ) + 1;
//The reason we don't use Math.ceil is that Math.random could give you 0 then * 6 = 0 so you have a very small chance to roll 0.

------------------
	IF statements:
------------------

var answer = prompt('What programming language is the name of gem?');
if ( answer === 'Ruby') {		
	document.write("<p>That's right!</p>")
} else {
  document.write("<p>Sorry that's wrong.</p>"); 
}
// === is an equality operator. It is used to test if two values are exactly the same. If they are the same, the code inside the value runs.
// It is common practice to indent the test inside the curly braces.
// The problem is that 'ruby' would give you incorrect as Ruby =/= ruby.
Rather use
if ( answer.toUpperCase === 'RUBY') {		
	document.write("<p>That's right!</p>")
} else {
  document.write("<p>Sorry that's wrong.</p>"); 
}

---------------------------
	If statement continued:
---------------------------
('apple') < ('bear') is True because 'a' in 'apple' comes before 'b' in 'bear'.
('500 bear') < ('bear') is True because numbers are Less Than letters.
>		Greater Than 
>=	Greater Than or Equal To
<		Less Than
<=	Less than or Equal To
==	Equal To (don't use if possible) ('JavaScript' === 'JavaScript') is True. ('javascript' = 'JavaScript') is also True.
===	Strict Equal To ('JavaScript' === 'JavaScript') is True. ('javascript' = 'JavaScript') is false.
!=	Not Equal To (don't use if possible)
!== Strict Not Equal To

---------------------------
	Boolean = true or false
---------------------------

/*
The Random Number Guessing Game
Generates a number between 1 and 6
and gives a player two attemps to
guess the number
*/
// assume the player didn't guess correctly
var correctGuess = false;
// generate a random number from 1 to 6
var randomNumber = Math.floor(Math.random() * 6 ) + 1;

var guess = prompt('I am thinking of a number between 1 and 6. What is it?');

/* test to see if player is 
1. correct
2. guessed too high
3. guessed too low
*/
if (parseInt(guess) === randomNumber) {
  correctGuess = true;
} else if (parseInt(guess) < randomNumber) {
  var guessMore = prompt('Try again. The number is more than ' + guess + '.');
  if (parseInt(guessMore) === randomNumber) {
    correctGuess = true;
  }
} else if (parseInt(guess) > randomNumber) {
  var guessLess = prompt('Try again. The number is less than ' + guess + '.');
  if (parseInt(guessLess) === randomNumber) {
    correctGuess = true;
  }
}
// test if player is correct and output the response  
if (correctGuess) {
    document.write('<p>You guessed the number!</p>');
} else {
    document.write('<p>Sorry. The number was ' + randomNumber + '.</p>');
}

------------
	&& = AND
------------
For example:
(20 < age && age < 30)

------------
	|| = OR
------------
For example:
(agree === 'yes' || agree === 'y') // both sides of the || must be a complete condition.
if (agree === 'yes' || 'y') {

}		// this will not work as both sides of the || are not complete conditions.


-------------
  FUNCTIONS
-------------
A function can only return a single value: a variable, a string, a number, a Boolean value, and so on.
As soon as the function encounters a return statement it exits the function and returns a value.
return immediately exits the function.
Use 'return' as the last item in the function.

When you declare a variable WITHIN a function - that keyword is only callable within that function.
However - when you declare a variable OUTSIDE of a function - it is accessable anywhere (even in functions).

'return' can only output 1 thing (boolean, number etc.)
'function' can receive multiple inputs e.g. "20, 25, 1000".

Argument: A value that you pass to a function when you call the function.
In JavaScript, "scope" refers to where in a program a variable can be accessed.
When you call a function you pass an "argument" which is stored in a "parameter" in the function.

function getRandomNumber(quotationsLength) {
  var num = Math.floor(Math.random() * quotations.length); 
  return num;
}

---------
 	LOOPS
---------
___________
*__while__*

A loop is a way to repeat an action a certain number of times or until a condition is true.

// THIS LOOP WILL NOT RUN (not even start):
while (false) {
	
}

**You always need a way to break out of a loop**

______________
*__do while__*

while () { // this only runs the code if the () statement is true.
	
}

vs

do {				// this always runs the code in {} AT LEAST ONCE regardless if the while() statement is true or false.
	
} while ()

var randomNumber = getRandomNumber(10);
var guess;
var guessCount = 0;
var correctGuess = false;

function getRandomNumber( upper ) {
  var num = Math.floor(Math.random() * upper) + 1; 
  return num;
}

do {
  guess = prompt('I am thinking of a number between 1 and 10. What is it?');
  guessCount += 1;
  if (parseInt(guess) === randomNumber) {
    correctGuess = true;
  }  
} while ( ! correctGuess )
  
document.write('<h1>You guessed the number!</h1>');
document.write('It took you ' + guessCount + ' tries to guess the number ' + randomNumber);

________________

var html = '';
var red;
var green;
var blue;
var rgbColor;

function randomRGB() {
  return Math.floor(Math.random() * 256);
}

function randomColor() {
  var color = 'rgb(';
  color += randomRGB() + ',';
  color += randomRGB() + ',';
  color += randomRGB() + ')';
  return color;
}

function print(message) {
  document.write(message);
}

for (var i = 0; i < 10; i += 1) {
  rgbColor = randomColor();
  html += '<div style="background-color:' + rgbColor + '"></div>';
}

print(html);

_____________________


---------
 	ARRAY
---------

var scores = [100, 99, 99, 72, 60];
var names = ['Joan', 'Amit', 'Sarah', 'Ricardo', 'Piers'];
var values = [1, -100, true, false, 'JavaScript'];
var myScore = [ 
  'test', 
  44, 
  -100, 
  true, 
  false, 
  'JavaScript'
];

First item in an array is 0.
var shopping = [ 'carrots', 'milk', 'eggs' ];
alert(shopping[0]); // alerts 'carrots'
alert(shopping[1]); // alerts 'milk'
alert(shopping[2]); // alerts 'eggs'
alert(shopping[3]) // alerts 'undefined' as there is no index 3 (remember 0 = first item, 1 = 2nd item, 2 = 3rd item so 3 = 4th item.)



--Add items to the end of an array with .push()--

var items = ['Hat', 'Ball', 'Shoes'];
items.push('Socks','Scarf');
// items is now ['Hat', 'Ball', 'Shoes', 'Socks', 'Scarf']



--Add items to the beginning of an array with .unshift()--

var items = ['Hat', 'Ball', 'Shoes'];
items.unshift('Socks','Scarf');
// items is now ['Socks', 'Scarf', 'Hat', 'Ball', 'Shoes']



--Remove the First Item from an array with .shift()--

var items = ['Hat', 'Ball', 'Shoes'];
var firstItem = items.shift();
// firstItem now holds 'Hat'
// and items is now ['Ball', 'Shoes']


--Remove the Last Item from an array with .pop()--

var items = ['Hat', 'Ball', 'Shoes'];
var lastItem = items.pop();
// lastItem now holds 'Shoes'
// and items is now ['Hat', 'Ball']


// My Music Playlist - combines functions, loops and arrays.

var playList = [
  'I Did It My Way',
  'Respect',
  'Imagine',
  'Born to Run',
  'Louie Louie',
  'Maybellene'
];

function print(message) {
  document.write(message);
}

function printList( list ) {
  var listHTML = '<ol>';
  for ( var i = 0; i < list.length; i += 1 ) {
    listHTML += '<li>' + list[i] + '</li>';
  }
  listHTML += '</ol>';
  print(listHTML);
}

printList(playList);

//
var temperatures = [100,90,99,80,70,65,30,10];
for ( var i = 0; i < temperatures.length; i += 1 ) {
  console.log(temperatures[i]);
}
//
----------------------------
	2D ARRAYS (Arrayception) // ARRAYS USE STRAIGHT SQUARE BRACKETS.
----------------------------
//Objects use KEYS. Arrays use indexes.

This is an array within an array.

var grades = [
	[80, 90, 100, 95],
	[75, 95, 88, 100],
	[60, 80, 77, 90]
];

To call the first grades, call:
grades[0] // will recall 	80, 90, 100, 95.
grades[0][2] // will recall 100
grades[2][3] // will recall 90

concat()-------
concat() combines one array with another to create a new array

.join------------
var students = ["Sally", "Joan", "Raphael", "Sam"];
var message = "Hello " + students.join(", ");

indexOf--------
var temperatures = [ 76.3, 44.9, 56, 89.8, 100.2];
console.log( temperatures.indexOf( 89.8 ) );
// Array items are counted starting at 0, so the indexOf( ) method will return 3 (meaning the item at index 3) in the array.

------------
	OBJECTS   //OBJECTS USE CURLY BRACKETS http://www.metaltoad.com/blog/javascript-understanding-objects-vs-arrays-and-when-use-them
------------
// A JavaScript object literal is like a series of named variables, each with their own value, packaged into a single item -- the object.
//Objects use KEYS. Arrays use indexes.
Square brackets [] create an array.
Curly brackets {} create an object.

var student = { // remember there is an equals.
	name : "Dave", //name = key/property (kind of like a variable), "Dave" = value. Seperate key value pair with a comma.
};

var students = {
	name : "Dave",
	grades : [80, 40, 20, 93] //Note no comma here as it's the last itme in the list.
},

//Examples:
var person = {
  name : 'Sarah',
  country : 'Japan',
  age : '400',
  treehouseStudent : true,
  skills : ['JavaScript', 'HTML', 'CSS']
};

//How to access the properties:

alert(person['name']);
alert(person.name); //MUCH EASIER (start with object name then . then property name.)

//To change the value of the person.name:

person.name = 'Bobby'; //This will change name from 'Sarah' to 'Bobby'.
person.street = 'Fairfield' //This will add a new property called 'street' with the value of 'Fairfield' (as there is no property called 'street' currently). 

//You can use objects on objects and methods of properties Exaple:

var person = {
  name : 'Sarah',
  country : 'US',
  age : 35,
  treehouseStudent : true,
  skills : ['JavaScript', 'HTML', 'CSS']
};

function print(message) {
  var div = document.getElementById('output');
  div.innerHTML = message;
}

var message = '<p>Hello. My name is ' + person.name + '.</p>';
message += '<p>I live in the ' + person.country + '</p>';
person.name = 'Rainbow Dash';
message += '<p>But, I wish my name was ' + person.name + '.</p>';
person.age += 1;
message += '<p>My age is now ' + person.age + '.</p>';
message += '<p>I have ' + person.skills.length + ' skills: '; //person = object, skills = property, then '['JavaScript', 'HTML', 'CSS']' is another array which is an object.
message += person.skills.join(', ') + '</p>'; //person = obj, skills = prop, join = method. So you can use a method on another object (the array is an object).
print(message);


----------------
	FOR IN LOOPS // ONLY USED IN OBJECTS!!!!!!!!!!
----------------
// only bracket notation works in for in loops. NOT DOT NOTATION.
var student = {
	name : "Dave",
	grades : [60, 89, 55, 76]
}
//'for', 'var' and 'in' are critical, but the rest can be whatever you want it to be.
for (var key in student) {
	console.log(student[key]); // console.log(student.key) will not work! USE BRACKET NOTATION.

}

var person = {
  name : 'Sarah',
  country : 'US',
  age : 35,
  treehouseStudent : true,
  skills : ['JavaScript', 'HTML', 'CSS']
};

for (var prop in person) {
  console.log(prop, ': ', person["country"]);
}


----
var questions = [
  {
    question: 'How many states are in the United States?',
    answer: 50
  },
  {
    question: 'How many continents are there?',
    answer: 7
  },
  {
    question: 'How many legs does an insect have?',
    answer: 6
  }

  ------------------------------------------------------
	  JSON // JSON stands for JavaScript Object Notation
  ------------------------------------------------------

JSON is a string that's formatted LIKE a JavaScript object literal.

-------------
	indexOf()
-------------

The indexOf( ) method can search an array to see if there is a matching item in the array. 
For example, students.indexOf("Kari") looks to see if the string "Kari" is an item in the students array.

Returns the index number if it is there, otherwise returns -1 if it is not there.


/*var message = '';
var student;
var search;
function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}


for (var i = 0; i < students.length; i += 1) {
  student = students[i];
  message += '<h2>Student: ' + student.name + '</h2>';
  message += '<p>Track: ' + student.track + '</p>';
  message += '<p>Points: ' + student.points + '</p>';
  message += '<p>Achievements: ' + student.achievements + '</p>';
}



while (true) {
  search = prompt("Search for a student. Type 'Simon' to search for Simon. Type 'quit' to exit");
  if (search === 'quit') {
  break;
  } else if (search === students.name) {
    print(hello);  
  }
}
*/