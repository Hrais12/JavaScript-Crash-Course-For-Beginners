alert('Hello World'); // Do not use for debugging. Stops script and only strings
console.log('Hello World');
console.error('This is an error');
console.warn('This is a warning');


// VARIABLES - var, let, const
let age = 30;

// let can be re-assigned and you can name it and assign a value later, const can not be changed and you have to add a value
age = 31;


// DATA TYPES - String, Number, Boolean, null, undefined, symbols
const name = 'Jhon';
const age = 30;
const rating = 4.5; // decimils are also consided numbers
const isCool = true;
const x = null;      // means empty it is not an object 
const y = undefined;
let z; // undefined

// Check type of data
console.log(typeof z);


// STRINGS

// Concatenation
console.log('My name is ' + name + ' and I am ' + age);
// Template literal (better)
console.log(`My name is ${name} and I am ${age}`);

// String methods & properties
const s = 'Hello World';

// Get length
console.log(s.length) ;
// Change case
console.log(s.toUpperCase()); 
console.log(s.toLowerCase());
// Get sub string
console.log( s.substring(0, 5)); // print hello

console.log((s.substring(0, 5)).toUpperCase());  // print HELLO
// Split into array
console.log(s.split('')); // print an array with 12 values



// ARRAYS - variables that hold multiple values

//using the constructor
// const numbers = new Array(1,2,3,4.5)

const numbers = [1,2,3,4,5];
const fruits = ['apples', 'oranges', 'pears'];
console.log(numbers, fruits);

// Get one value - Arrays start at 0
console.log(fruits[1]);

// Add value
fruits[3] = 'grapes';

// Add value to the end using push()
fruits.push('mangos');

// Add to beginning
fruits.unshift('strawberries');

// take the last value off
fruits.pop();

// // Check if it is an array
console.log(Array.isArray(fruits));

// // Get index
console.log(fruits.indexOf('oranges'));



// OBJECT LITERALS
const person = {
  firstName: 'John',
  lastName:'Doe',
  age: 30,
  hobbies: ['music', 'movies', 'sports'],
  address: {
    street: '50 Main st',
    city: 'Boston',
    state: 'MA'
  }
}
console.log(person)

// Get single value
console.log(person.name, person.lastName)

// Get array value
console.log(person.hobbies[1]); // print movies

// Get embedded object
console.log(person.address.city);

// using destructuring
const {firstName, lastName} = person
console.log(firstName);  // pulling something out

// get embedded object
const { address : {city}} = person;
console.log(city);

// Add property
person.email = 'jhon@gmail.com';

// Array of objects
const todos = [
    {
      id: 1,
      text: 'Take out trash',
      isCompleted: true
    },
    {
      id: 2,
      text: 'Meeting with boss',
      isCompleted: true
    },
    {
      id: 3,
      text: 'Dentist appt',
      isCompleted: false
    }
  ];

  console.log(todos);
  console.log(todos[1].text)

  // Get specific object value
console.log(todos[1].text);

// Format as JSON mabe to send it to a server so it doesn't give errors
const todoJSON = JSON.stringify(todos)
console.log(todoJSON);



// LOOPS

// For
for(let i = 0; i <= 10; i++){
    console.log(`For Loop Number: ${i}`);
  }
  
  // While "we set the variable outside the loop" .
  let i = 0
  while(i <= 10) {
    console.log(`While Loop Number: ${i}`);
    i++; //if you don't increment the i it will never end.
  }

  // Loop Through Arrays
// For Loop
for(let i = 0; i < todos.length; i++){           // .length give us the number if items in the array
    
    console.log(todos[i].text); //or console.log(` Todo ${i + 1}: ${todos[i].text}`);
  }
  
  // For...of Loop
  for(let todo of todos) {
    console.log(todo.text); // you don't need the index i .
  }
  
  // HIGH ORDER ARRAY METHODS (show prototype)

  // forEach() - Loops through array
todos.forEach(function(todo) { // you add to the callback function the variable you want to use as each item.
   
    console.log(todo.text); 
  });
  
  // map() - Loop through and create new array
  const todoText = todos.map(function(todo) {  // assign a todoText
    return todo.text; // return a whole new array with just the text
  });
  
  console.log(todoText);
  
  // filter() - Returns array based on condition
  const todoCompleted = todos.filter(function(todo) {
    // Return only todos where isCompleted  true
    return todo.isCompleted === true; 
  }).map(function(todo){   // by chaining map with filter it creat an array with only the one who been completed
    return todo.text;
  })
  console.log(todoCompleted);

  // CONDITIONALS

// Simple If/Else Statement
const x = 20;
const y = 10;


console.log(color);

if(x === 10) {
  console.log('x is 10');
} else if(x > 10) {
  console.log('x is greater than 10');
} else {
  console.log('x is less than 10');
}

if(x > 5 || y>10) {
    console.log('x is more than 5 or y is more 10');
}

// Ternary operator / Shorthand if

const color = x > 10 ? 'red' : 'blue'; // ? represent then , : represent else


// Switch
 color = 'blue';

switch(color) {
  case 'red':
    console.log('color is red');
    break;
  case 'blue':
    console.log('color is blue');
    break;
  default:  
    console.log('color is not red or blue');
    break;
}

// FUNCTIONS
function addNums(num1=1 , num2=1 ){
    return num1 + num2 ; // we don't consol.log a function we return something from it
}
console.log(addNums(5 ,5)); // if you pass numbers inside it will overide the one above


//arrow function
const addNums = (num1=1 , num2=1 ) => num1 + num2 ;
   console.log(addNums(5 ,5)); 

   todos.forEach(todo) => console.log(todo);


// Constructor Function
function Person(firstName, lastName, dob) {  // Person is the object it shoul start with a capital when creating a construction function, inside the function are the parameters
    // Set them to object properties
    this.firstName = firstName; // you access the Object properties using this
    this.lastName = lastName;
    this.dob = new Date(dob); // Set to actual date object using Date constructor
   
    // you can add methods (which are basically functions )to this Person object 
//     this.getBirthYear = function(){
//       return this.dob.getFullYear();
//     }
//     this.getFullName = function() {
//       return `${this.firstName} ${this.lastName}`
//     }
//   }

// we can attach methods and properties to the prototype and get rid of functions(methods) inside our object
  // Get Birth Year
  Person.prototype.getBirthYear = function () {
    return this.dob.getFullYear();
  }
  
  // Get Full Name
  Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
  }
  
  console.log(person1.getBirthYear());
  console.log(person1.getFullName());




// Built in constructors
const name = new String('Kevin');
console.log(typeof name); // Shows 'Object'
const num = new Number(5);
console.log(typeof num); // Shows 'Object'


// ES6 CLASSES (it does the same thing adding them to the prototype it is just a different way to do it using classes, classes are easier to read)
class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  // Get Birth Year
  getBirthYear() {
    return this.dob.getFullYear();
  }

  // Get Full Name
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

// Instantiate an object from the class
const person1 = new Person('John', 'Doe', '4-3-1980');
console.log(person1);
const person2 = new Person('Mary', 'Smith', '3-6-1970');
console.log(person2.firstName);
console.log(person2.dob.getFullYear()); // when you have a date object there is banch of methods you can call like getFullYear


console.log(person2);

// Built in constructors
const name = new String('Kevin');
console.log(typeof name); // Shows 'Object'
const num = new Number(5);
console.log(typeof num); // Shows 'Object'


// ELEMENT SELECTORS from the DOM

// Single Element Selectors
console.log(document.getElementById('my-form'));  // .getElementById is single selector only for Id
console.log(document.querySelector('.container')); // for every thing but select only one 
// Multiple Element Selectors
console.log(document.querySelectorAll('.item')); // using this one for mutiple element is recomended
console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByClassName('item'));

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));


// MANIPULATING THE DOM
const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
// btn.style.background = 'red';



// EVENTS

// Mouse Event
btn.addEventListener('click', e => { // e is an event parameter // you can replace the 'click' with 'mouseout' or 'mouseover'
    e.preventDefault();
    console.log(e.target.className);  // e.target get the element that event is on (button), 
    document.getElementById('my-form').style.background = '#ccc'; // change the background coler of the form to a dark grey #ccc
    document.querySelector('body').classList.add('bg-dark'); // add a class called bg-dark
    ul.lastElementChild.innerHTML = '<h1>Changed</h1>';
  });
  
  // Keyboard Event
  const nameInput = document.querySelector('#name');
  nameInput.addEventListener('input', e => {
    document.querySelector('.container').append(nameInput.value);
  });
  
  
  // USER FORM SCRIPT
  
  // Put DOM elements into variables
  const myForm = document.querySelector('#my-form');
  const nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');
  const msg = document.querySelector('.msg');
  const userList = document.querySelector('#users');
  
  // Listen for form submit
  myForm.addEventListener('submit', onSubmit);
  
  function onSubmit(e) {
    e.preventDefault();       // console.log(nameInput.value) so it display the value not #name
    
    if(nameInput.value === '' || emailInput.value === '') {  // form validation doesn't submit unless the two input filled out
      // alert('Please enter all fields');
      msg.classList.add('error');    // .error is a class in the style sheet
      msg.innerHTML = 'Please enter all fields';
  
      // Remove error after 3 seconds
      setTimeout(() => msg.remove(), 3000); // the time is in ms 3s equal to 3000ms
    } else {
      // Create new list item with user
      const li = document.createElement('li');  // create a new list items and inserted into the DOM
  
      // Add text node with input values
      li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
  
      // Add HTML
      // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;
  
      // Append to ul
      userList.appendChild(li);
  
      // Clear fields
      nameInput.value = '';
      emailInput.value = '';
    }
  }}

