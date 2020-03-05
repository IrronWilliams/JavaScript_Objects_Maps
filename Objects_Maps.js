/*USE OBJECTS TO FOR MANAGING KEY VALUE PAIRS
Objects provides a powerful way to manage and organize related data

Mental reference for variables are boxes where i can store anything i like. objects are like file cabinet.
to get items from a file cabinet, u need a reference, such as a file. with a given name. every value on an object 
has a separate file and a separate identifier that i can use to access (aka keys or properties). objects are made 
with object literal syntax {} where keys and values are held. if object is a file cabinet, the keys are the name 
of the file the value is the context of files themselves. 

with a key/value pair, every key is a simple JavaScript string, and need to link given key to its corresponding value.
while keys can only be strings, its associated value can be any data type (boolean, number, like string, other objects or functions )

Objects are great when i want to share static info, unchanging, structured, key-value data. Objects not useful for dynamic data. 
*/


/*the obj object contains a function where key = function sayHi() and value = 'hi'. a method is a direct property of an object, can 
call that method using following syntax: objectName.methodName()
*/
const obj = {
    sayHi() {
      console.log('hi')  
    }
  }  
obj.sayHi(); //calling sayHi on the object


//creating object for colors
const blue = '#00f'
const orange = '#f60'

const colors = {
    blue: blue,
    orange: orange,
    yellow: '#ff0',
}
console.log(colors)

//if value variable name is same as key name, can apply object property shorthand to reduce code  
const pink = '#00f'
const purple = '#f60'

const colors2 = {
    pink,
    purple,
    yellow: '#ff0',
}
console.log(colors2)

//can actually condense to one line because program is so short
const colors3 = {pink, purple, yellow: '#ff0',}
console.log(colors3)

//use dot syntax to access values (because methods are properties of objects). use syntax objectName.key
console.log(colors.blue)

/* Challenge: 
1. Create three variables - bar, cafe, restaurant - and set their values to a bar, a cafe and a restaurant in your city
2. Create an object - favouritePlaces - and populate it with your variables from task 1
3. If you're not already using the object property shorthand, refactor your code to do so
4. Create a method on the object - greeting() -  that logs out a message to the console
5. Invoke the greeting() method and also log out your favourite restaurant to the console */
const bar = 'BarNone'
const cafe = 'Arrow Coffee'
const restaurant = 'LePetit Providence'

const favouritePlaces = {
    bar : bar,
    cafe : cafe,
    restaurant : restaurant,
}
console.log(favouritePlaces)

//using object property shorthand because key value is same as variable name 
const favouritePlaces2 = {
    bar, 
    cafe, 
    restaurant,
    greeting() {
        console.log('Hello There')
    }
}
favouritePlaces2.greeting() //invoking the greeting method
//console.log(favouritePlaces2)
console.log(`Thank you for visiting ${favouritePlaces2.bar}`)
console.log(favouritePlaces2.cafe)


/*UNDERSTANDING PRIMITIVE VS OBJECT TYPES */