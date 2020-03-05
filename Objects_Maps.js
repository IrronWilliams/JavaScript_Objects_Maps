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

the 'obj' object below contains a function where key = function sayHi() and value = 'hi'. a method is a direct property of an object, can 
call that method using following syntax: objectName.methodName()
*/
const obj = {
    sayHi() {
      console.log('hi')  
    }
  }  
obj.sayHi()  //calling sayHi on the object

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

//using object property shorthand because key values are same as variable names 
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


/*UNDERSTANDING PRIMITIVE VS OBJECT TYPES 

Object types are just structures that enable us to manage collection of primitive data types.  There are technically 6 primitive types: 
 undefined, null, boolean, number, string, symbol (newer feature to language thats limited to advanced applications)
Whats important about the nature of primitive values is that when we make one it is copied. 

Make a number 42 and store it a variable called num. in this statement 42 is created, and when i assign it a variable or pass to a 
function, the data is copied. this means the variable num receives a copy of 42. If i create 42 in another another variable,
and compare the 2 expressions, this will result in true because if primitives have the same value, they are recognized as the same 
copied piece of data. In other words, primitive values are passed by values. This is not necessarily the case with objects. This is how 
object data differs from primitive data. 

const num = 42 
const anotherNum = 42 
console.log(num === anotherNum)  //returns true

const num = 'hello world' 
const anotherNum = 'hello world' 
console.log(num === anotherNum)  //returns true

Objects are data structures for holding any number of primitives. As compared to primitives, if an object is assigned to a variable, it is 
not copied when we use the = operator or assign it to a variable. Its not passed by value.  When the object is assigned to the variable, 
what the variable receives is not a copy of the object, but a reference to the object. So its not the actual object itself. If i create 
another empty object stored in another variable and compare the 2 objects stored in the 2 variables, they will not resolve to be equal.  
comparing these will result in false. JavaScript will determine these to be NOT the same although both objects are empty. So basically, 
every created object even though exactly the same is not equal to one another. This is due to the nature of objects and what we can do 
with them. Unlike primitives, have the ability to dynamically add properties to them. Unlike objects, primitive values are immutable, 
meaning cannot change any of their properties. Say for example, the string 'hello' has its own properties as a string and the string 
cannot be changed in any way, other than by value. This means that any primitive value is not unique. it cant differ from any primitive 
value thats the same data type and value hello. So another primitive like the boolean false can never defer from any other instance of 
false.  false === false always using the same value itself because they cant change. 

const obj = {} 
const anotherObj = {} 
console.log(obj === anotherObj)  //returns false

when JavaScript makes a new object, it is making a totally unique value and is treated as different due to its ability to have its own 
custom properties. therefore when we pass an object to a variable or function, either one holds a reference to it or a pointer to its 
unique place in memory. Unlike primitives which are passed by value, objects are passed by reference. Objects are reference types. 
No matter how many times we pass an object to different variables or functions, its always going to refer to the original created object. 
*/

/*program below returns the same value. although updating anotherObj by assignment, also updating obj (objects are passed by reference). 
for both variables obj and anotherObj we don't have 2 separate objects. we just have one shared reference to the original object.
the distinction between primitive vs objects or reference types matters because JavaScript does not pass a copy of the object but just
a reference to the original object. because of this reference, able to update both variables obj and anotherObj at once/same time. This 
behavior of passing by reference is not what we want or expect. so need to fix behavior of passing by reference that occurs with objects.
this behavior is not a quirk but its what gives objects their functionality  which is to add and dynamically update properties.
considering this behavior, can still update objects w/o surprises, make code less error prone and more reliable.    */
const obj = {}  //original object created 
const anotherObj = obj  //passing whats in obj to anotherObj. this assignment is not creating another object but sharing reference to obj
anotherObj.a = 1  //updating anotherObj with a property

console.log('obj', obj)  //returns obj,{a: 1}
console.log('another obj', anotherObj)  //returns obj,{a: 1}

/*GET AND MODIFY OBJECT DATA

Be aware of the static nature of objects. many times will rely on dot notation, especially for getting data and calling methods. remember
that in order to use dot notation, must know the property name ahead of time and cannot change. but if i have keys that can change as
program runs, be sure to use square brackets notation. */

/*program create a function that takes a key and returns color associated with key provided. getColor will accept a key, then take the
colors object, and using the key string, return the keys associated value. so take the colors object and use the dot syntax to get
the value and return it.

this program will return null because of dot notation.  notes below will explain why and how to resolve. */
const colors = {
    yellow: '#ff0',
    blue: "#f00",
    orange: "#f60"
  } 

function getColor(key) {
  return colors.key 
}


/*you can access values from an object according to their key after object has been created:   console.log(colors.yellow)

can also change object data after it has been created using similar syntax. following adds new a property to object called red
and mutates object to have it include red's associated value by using = operator. values on an object can be changed/updated anytime 
after the object has been created and when we have a reference to it. */
colors.red = '#foo' 
colors.red = '#f00'  //can update the value to correct typo. the existing key was overridden with the new correct value

/*object keys are strings. as long as we have a valid string, should be able to add as a valid key.  bracket notation provides capability 
to use keys dynamically. for example, can use bracket notation to access a key based upon a variable that can change. 
i can allow other users to update the object with their own corresponding hex codes. the dot notation method will not allow me/users to 
update object because with dot notation, the key has to be known beforehand and can't be provided as a variable. however, with the square
bracket notation, the key can be unknown. 

so the square bracket notation is a way to dynamically get and update object keys and values based on changing data.*/

const color = 'green' 
const hexCode = '#0f0' 

const colors = {
  'yellow Color': '#ff0',
  blue: "#f00",
  orange: "#f60"
} 
colors[color] = hexCode  //using square bracket notation [] to add key value pair to colors object
console.log(colors)  //returns {yellow Color: "#ff0", blue: "#f00", orange: "#f60", green: "#0f0"}

/*a simple approach is to not mutate the object with a key value pair. but instead, add key value pair directly on the object. */
const color = 'black' 
const hexCode = '#000' 

const colors = {
  'yellow Color': '#ff0',
  blue: "#f00",
  orange: "#f60",
  [color]: hexCode
} 
console.log(colors)  //returns {yellow Color: "#ff0", blue: "#f00", orange: "#f60", black: "#000"}

/*coming back to opening problem, purpose of program is to find value for color blue. program returns null or undefined. function 
couldn't find key with the name although provided argument for it. this is so because using dot notation in the function.  
to address this issue need to use bracket notation.  */
const colors = {
    yellow: '#ff0',
    blue: "#f00",
    orange: "#f60"
  } 

function getColor(key) {
  return colors.key  
}
console.log(getColor('blue'))  //returns null because using dot notation which means undefined


function getColor(key) {
    return colors[key]   //using bracket notation to return value for key. 
  }  
console.log(getColor('orange'))  //returns #f60 because using [] notation

/*can use delete operator to remove a property from object. can use [] or dot notation to remove property*/
delete colors['yellow Color'] //using delete operator to remove key value pair yellow Color from colors object.
delete colors.blue  //using dot notation to remove blue key pair value from color object 

/*EASY PROPERTY ACCESS WITH DESTRUCTURING 
 */