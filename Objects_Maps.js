/*USE OBJECTS TO FOR MANAGING KEY VALUE PAIRS
Objects provides a powerful way to manage and organize related data

Mental reference for variables are boxes where i can store anything i like. objects are like a file cabinet.
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
    blue: '#f00',
    orange: '#f60'
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
  blue: '#f00',
  orange: '#f60'
} 
colors[color] = hexCode  //using square bracket notation [] to add key value pair to colors object
console.log(colors)  //returns {yellow Color: '#ff0', blue: '#f00', orange: '#f60', green: '#0f0'}

/*a simple approach is to not mutate the object with a key value pair. but instead, add key value pair directly on the object. */
const color = 'black' 
const hexCode = '#000' 

const colors = {
  'yellow Color': '#ff0',
  blue: '#f00',
  orange: '#f60',
  [color]: hexCode
} 
console.log(colors)  //returns {yellow Color: '#ff0', blue: '#f00', orange: '#f60', black: '#000'}

/*coming back to opening problem, purpose of program is to find value for color blue. program returns null or undefined. function 
couldn't find key with the name although provided argument for it. this is so because using dot notation in the function.  
to address this issue need to use bracket notation.  */
const colors = {
    yellow: '#ff0',
    blue: '#f00',
    orange: '#f60'
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

/*EASY PROPERTY ACCESS WITH DESTRUCTURING: can leverage destructuring to get the specific properties that i want/need. 

program displays certain info/properties about user.*/
const user = {
    name: 'Reed',
    username: 'Reedbarger',
    email: 'reed@gmail.com',
    details: {
      title: 'Programmer'  
    }  
  } 
function displayUser() {
console.log(`username: ${user.username}, email: ${user.email}`)   //repeats reference to object user. 
}
displayUser()

/* instead of referencing the user object every time i want a property from it, i can just reference the property. 
this makes the code more convenient and readable. these values are detached from the user object and functioning like variables:
console.log(`username: ${username}, email: ${email}`) 

this can be accomplished via object destructuring. destructuring enables me to just pluck off the properties i want from an
object. 'destruct' the properties from object. as a result, make properties into their own independent variables. 

to destruct, take the object and the properties of interest (the properties that will become independent variables). set the object
equal to the variables:
const username, email = user 

written like this, the code will not work. need to tell JavaScript that i am attempting to get properties out of object 
and create variables with the same name. so username and email should correspond with the properties username and email from the user
object. to do this, need to wrap variable declarations in a set of curly braces:

const { username, email } = user  --> the variable name has to match an existing property of the object
*/

const user = {
    name: 'Reed',
    username: 'Reedbarger',
    email: 'reed@gmail.com',
    details: {
      title: 'Programmer'  
    }  
  }   
const { username, email } = user  //destructuring: making username and email independent variables that correspond with properties in user 
function displayUser() {
console.log(`username: ${username}, email: ${email}`)   
}
displayUser()

/* program returns user name and title from the nested details object. can access title by using following dot notation:
 user.details.title.  this way is a bit messy.

 there are 2 ways to accomplish this. can use partial dot notation to get access to the details property and destructuring the titles 
 property from nested object :
 const { title } = user.details
*/

//this approach works but using 2 separate destructuring statements for the same object users, repeating steps
const user = {
    name: 'Reed',
    username: 'Reedbarger',
    email: 'reed@gmail.com',
    details: {
      title: 'Programmer'  
    }  
  }   
const { title } = user.details //using partial dot notation to get access to details property and destructuring the titles property. 
const { name } = user  //destructuring: making name an independent variable. 
function displayUserBio() {
console.log(`${name} is a ${title}`)  //returns Reed is a Programmer
}
displayUserBio()

/*
condensing two destructuring statements into a single line. 
program destructure the details property from user and destruct another level further with a colon and another set of curly braces to 
go one level deeper. from details, turn tile property into const variable in same process as name:
const { name, details: { title} } = user
*/

const { name, details: { title} } = user  //revised destructuring statement
function displayUserBio() {
  console.log(`${name} is a ${title}`)  //returns Reed is a Programmer
}
displayUserBio()

/*can also apply object destructuring to functions. instead of relying on object data being in the global scope, want to pass object 
as a parameter. so that the function can be more reusable. 

say if i had multiple user bios, i want to reuse the function and pass the user data as an argument: 

pass the entire user object to displayUserBio(). within function declaration, call the parameter for the received object.  
now have access to all of the user data via the function scope. since userData is an object, with both the name and title properties, can 
perform the exact same destructuring operation. can do this by replacing the userData parameter with the destructured object. 
*/

function displayUserBio(userData) { //received user object. userData is an object with the name/title properties. have access to all properties. 
    console.log(`${name} is a ${title}`)  //will not work. need to perform destructuring within parenthesis of function. 
  }  
displayUserBio(user)  //passing the user object

function displayUserBio({ name, details: { title} }) { //replacing userData with destructed object. 
    console.log(`${name} is a ${title}`)  //returns Reed is a Programmer
  }  
displayUserBio(user) 

/*  Challenge: The recommendations object contains a set of of nice places to visit in Brighton, UK,
organized by what you'd like to do (eat pancakes, drink coffee etc).

1. Destructure the places to drink (coffee and beer) from recommendations
2. Destructure the places to listen to music
3. Write a function that takes the recommendations object as an argument and that
     a) Logs out the music venues in recommendations when invoked 
     b) Uses object descructuring to get the 'traditional' and 'jazz' keys from the argument
*/
const recommendations = {
    pancakes: 'Nowhere Man',
    riceBowls: 'Pompoko',
    beer: 'The Craft Beer Co.',
    coffee: 'Coffee Roasters',
    small_plates: 'Venetian Plates',
    music: { 
        traditional: 'Fiddler\'s Elbow', 
        jazz: 'The Paris House'
    }
}
//Solution1: Destructure the places to drink (coffee and beer) from recommendations
const { beer, coffee } = recommendations
console.log(beer) //returns The Craft Beer Co.

//Solution2: Destructure the places to listen to music
const { traditional, jazz } = recommendations.music //option 1
console.log(jazz)  //returns The Paris House

const { music: { traditional, jazz } } = recommendations  //option 2 tells JS objects traditional and jazz are nested in the music object
console.log(jazz) //returns The Paris House

//Solution 3
function displayMusicPlaces({ music: { traditional, jazz } }) {
    console.log(`Head to ${traditional} or ${jazz} to listen to great music!`)// returns Head to Fiddler's Elbow or The Paris House to listen to great music!
}
displayMusicPlaces(recommendations)

/*MERGE OBJECTS WITH THE OBJECT SPREAD 

to create a new object that preserves the default properties on the user object while merging with the new data on the newUser object is
possible with a new method called object.assign(). object.assign() lets me update an object with properties from another object. 

the 1st argument or argument passed to object.assign() is the object i want returned from this merged operation. argument after the 1st,
is the properties i want to merge into the 1st argument object. goal is to take properties represented in the 2nd argument and put on the 
1st object. so merge the properties from newUser onto user and return user object.  the program raises an issue because it mutates 
original object. This is so because objects are passed by reference not by value. this results in unexpected behavior of objects.  
*/
const user = {
    name: '',
    username: '',
    phoneNumber: '',
    email: '',
    password: ''  
  } 
  
  const newUser = {
    username: 'ReedBarger',
    email: 'reed@gmail.com',
    password: 'mypassword'  
  } 
  console.log(Object.assign(user, newUser))  //returns {name: '', username: 'ReedBarger', phoneNumber: '', email: 'reed@gmail.com', password: 'mypassword'}
  Object.assign(user, newUser)  //returns {name: '', username: 'ReedBarger', phoneNumber: '', email: 'reed@gmail.com', password: 'mypassword'}
  console.log(user) 
/*
there is a problem with the current program because the original user object is being mutated because objects are passed by reference. 
to address this behavior, don't want to merge new values on the original object. instead use an entirely new object by passing an empty
object as the 1st parameter. a brand new object will be returned an have merged in it the properties of user and newUser. 

to avoid mutating the original object, pass an empty object as the 1st argument in object.assign()  which will be what is returned 
*/
Object.assign({}, user, newUser) 
console.log(user)  //confirms user object has not been mutated, and shows empty empty string values for the properties. 

//returns the correct updated values from newUser
console.log(Object.assign({}, user, newUser))  //returns {name: '', username: 'ReedBarger', phoneNumber: '', email: 'reed@gmail.com', password: 'mypassword'}

/*
adding a new verified property of false for each user to the object being used in Object.assign. 
 */
//Option1
const verifiedDefault = {
    verified: false  
  }   
console.log(Object.assign({}, user, newUser, verifiedDefault)) 

/*Option2: add object inline w/o creating/declaring a separate variable. 
object.assign() is responsible for gathering object properties and their corresponding values and merging them into a new object. 
However, using this approach is not always intuitive. Better to use the spread operator.*/
console.log(Object.assign({}, user, newUser, { verified: false })) 

/*THE SPREAD OPERATOR: spreads objects properties into another object. include'...' before the object i want to spread in. 
the spread operator has all of the advantages as object.assign() with reduced syntax, creates objects in a more intuitive way, 
and does so without mutating objects. 

the order is significant for both object.assign and the spread operator. the object is supplied with the last value. for example, 
if user had a default value of true for verification (verified : 'true') and later in the program, i passed a value of 'false' for 
the key verified, the value for verified will be updated to false. As a rule, when performing updates to existing properties, make sure 
the updated values come at the end or after the initial value. 

program creates an object called createdUser and spreads the properties from user and newUser into the createdUser object. 

the use cases for object.assign() and the spread operator:
1. use them to establish common default properties of any object thru merging 2 or more objects. 
2. to non-destructively update or add properties in a way that does not mutate original object. 
*/
const user = {
    name: '',
    username: '',
    phoneNumber: '',
    email: '',
    password: ''  
  } 

  const newUser = {
    username: 'ReedBarger',
    email: 'reed@gmail.com',
    password: 'mypassword'  
  } 
  
  const createdUser = { ...user, ...newUser, verified: false } 
  console.log(createdUser)  //returns {name: '', username: 'ReedBarger', phoneNumber: '', email: 'reed@gmail.com', password: 'mypassword', verified: false}


/*HOW MAPS CAN DO WHAT OBJECTS CANNOT

Objects come with limitations. its keys have to be strings or less frequently used symbols. whatever data type provided as a key, 
there is a implicit conversion to a string. as a result, cant have unique data types for keys. 
in this way, objects are not flexible. 

there is a solution called maps. maps is an object data type and can be considered as objects PLUS. they are meant to be used just like 
objects as a key/value storage. but created to address the limitations/unexpected behavior of objects. maps will preserve and not 
implicitly convert key to a string. maps are also more flexible (can hold multiple key data-types) and more structured (preserves order)


use maps in following situation:
1. if object key is not a string or symbol
2. if i want to preserve the insertion order of the keys (maps preserves the order, objects do not)
 



Object.keys() tells me the key value type. 

a. syntax to create a map = new Map().  
b. like objects, can declare values on a map immediately when created. will need square brackets to create key/value pair: new Map([])
c. for each key/value pair, add additional set of square brackets, with a comma between key and value  ['key', 'value']

*/
//basic syntax for maps
new Map([
    ['key', 'value']  
  ]) 

/*adding a key/value pair by using set() method, which is available on every created map. set() mutates object. to add a key/value pair:
map1.set('key', 'value')  */
const map1 = new Map([
    [1, 1],
    [true, true]  
  ]) 
  map1.set('key', 'value')  //using set() method to add key/value to map1
  console.log([...map1.keys()]) //returns [1 , true, 'key']. using spread operator 

/*forEach() method created to iterate over Map array. forEach() is a method that accepts a callback function. the forEach() function
give what i pass to it, the 2 pieces of data that i want. for each pair in map1, i want its key and value.  */
const map1 = new Map([
    [1, 1],
    [true, true]  
  ]) 
  
  map1.set('key', 'value') 
  
  map1.forEach((value, key) => {
    console.log(key, value)   
  })  //returns 1,1  true ,true   key ,'value'

/*in addition to primitive values, can also use entire objects as keys on maps. for example, have objects that consists of user names.
need to store important data but do not want to attach the data to the object. for example, there are secret keys associated with each
user and want to ensure the keys are not visible to the user. solving this with objects is not possible. but can use maps as a workaround. 

approach is to make users the keys on the objects and the related secret keys as values. need to create a map to make user1/user2 the 
keys on the object and their related secret keys as values. so the map will store these values from different objects as key/value pairs, 
with user1 linked to secretKey1 and user2 linked to secretKey2.  

*/
const user1 = { name: 'john' }
const user2 = { name: 'mary' }
const secretKey1 = 'asldjfalskdjf' 
const secretKey2 = 'alksdjfakjsdf' 

const secretKeyMap = new Map([
    [user1, secretKey1],
    [user2, secretKey2]  
  ])   
console.log(secretKeyMap) //returns Map, confirms user objects were made into keys

/*a downside to this approach is the difficulty to access some of the properties. for example, getting the name property from user1.  
this approach is best when i want to just get the value. to get the secret key or value for each user, i just need to reference each 
user stored in their variables. i do this by doing the opposite of the set() method  which is the get() method. can use the get() method
to get the users secret key. 

another downside is that the objects can be very large, meaning having multiple properties. this can take up a lot of memory in the 
application which can make it slower. when done using the map, i want it to be garbage collected which means thrown away so that it 
clears up more spaces/memory for new values. to do so, can use a variant of map that is optimized for garbage collection. this variant
is called weak map which was designed specifically for this purpose. because of this, it only accepts objects as keys. to use weak map, 
simply replace Map with WeakMap. WeakMap returns same results. 

a significant improvement that map brings to data that needs to be stored as key/value pairs is the ability to know how long the object
is. the normal JavaScript object does not have a length property that tells how many values it has. for normal object, will need to use
object.keys() as a workaround. use object.keys() to convert object into an array of its key values, then use the length properties of 
arrays to see how many data points is has. Object.keys(nums).length.  map provides a much more convenient alternative called size. 
size provides the number of key/value pairs in a map. 

will still rely heavily on objects to hold structured data. but objects do have limitations:
1. only strings and symbols can be used as keys.
2. objects can't be used as keys. 
3. objects can't be easily iterated over
4. can't easily get the length of objects.

map can solve all of these use cases/limitations of objects as an effective key/value pair storage. think of maps and objects as let and 
const. maps don't replace objects. maps just have their specific use cases. use objects the majority of the time but if my application has
requirements that are limited with objects, use maps.
*/

//creates a new map and uses objects user1/user2 as keys and objects secretKey1/secretKey2 as values.
const secretKeyMap = new Map([
    [user1, secretKey1],
    [user2, secretKey2]  
  ])   
console.log(secretKeyMap) //returns Map, confirms user objects were made into keys

const key = secretKeyMap.get(user1)  //using get() method to get secret key for user1
console.log(key)  //returns asldjfalskdjf

const secretKeyMap = new WeakMap([ //using WeakMap to optimize garbage collection. 
    [user1, secretKey1],
    [user2, secretKey2]  
  ]) 
const key = secretKeyMap.get(user1) 
console.log(key)  //still returns asldjfalskdjf

//using size to count the number of key/value pairs
  const userMap = new Map([
    ['name', 'john'],
    ['verified', true]  
  ]) 
  
  console.log(userMap.size)  //returns 2

/*Challenge: 
1. Take the object (contains a favourite place in Brighton, UK), and turn it into a Map
2. Add a boolean property 'visited', to indicate places that you've been to it
3. Add an integer property 'averageBill' with how much you spend there on average
4. Fetch one of the properties using the get() method
*/
const favouritePlace = {
    music: 'jazz',
    name: 'Paris House'
}
//turning object into a map
const favouritePlaceMap = new Map([
    ['music', 'jazz'],
    ['name', 'Paris House'],
    ['visited', true],
    ['averageBill', 17.4]
])
console.log(favouritePlaceMap.get('averageBill')) //returns 17.4

/*IMPROVE METHODS WITH ARROW FUNCTIONS: Proper understanding of the 'this' keyword and how it should be used. 

the 'this' keyword is a feature of functions that allows me to get access to an objects data. the 'this' keyword
is a complex/tricky concept to understand. partly because the 'this' keyword value is determined dynamically and is
based on how the function is called that references the given keyword. i can use the 'this' keyword within the 
getBio() method to be able to access the 2 properties to make the function work. in this example, think of 'this' 
being equal to the variable userData. as a result, that allows me to use this.username and this.title in the getBio()
method.

the benefit of using 'this' keyword is that i don't have to look at the variable name the object has been assigned to.
benefit is realized if the variable name of the object changes, i will have to update all occurrences of the old 
variable name to the new variable name. for example, console.log(`User ${userData.username} is a ${userData.title}`)
will need to be changed if the variable name of the object has been changed to user. the 'this' keyword relieves me 
from a lot of tedious work. 

the 'this' keyword was provided to the language for methods on objects to be able to use properties off of 
the objects that they were placed on. 


Object below consists of a couple of properties  username and title. for each user, want to display the data across
the app to other users on their profile page. the getBio() method will display the data. the getBio() method is a 
function made with a function declaration. getBio() is equivalent of getBio: function(). Only functions declared with 
a function keyword have a dynamic 'this'. meaning the value of 'this' is determined by how the function is called. 

when 'this' is used with an arrow function, 'this' is grabbed from exactly where its needed. because its points to the scope above where 
the arrow function was declared. as compared to having a dynamic 'this' that can change how a function is defined, arrow functions have an
lexical 'this', meaning its value is determined lexically or by the surrounding scope. */
const userData = { 
  username: "Reed",
  title: "JavaScript Programmer",
  getBio() {
    console.log(`User (username) is a (title)`) 
  }  
}
/*can think of 'this' being equal to the variable userData. as a result, can update getBio() method */
const userData = { 
  username: "Reed",
  title: "JavaScript Programmer",
  getBio() {
    console.log(`User ${this.username} is a ${this.title}`)  //updating with 'this'
  }  
}
userData.getBio()  //calling method returns User Reed is a JavaScript Programmer

/*askToFriend method will console.log 'Would you like to friend Reed?' 2 seconds after function is called. */
const userData = { 
  username: "Reed",
  title: "JavaScript Programmer",
  getBio() {
    console.log(`User ${this.username} is a ${this.title}`) 
  },
  askToFriend() {
    setTimeout(() => {
      console.log(`Would you like to friend ${this.username}?`)    //arrow function has context. returns Would you like to friend Reed? 
    }, 2000)   //2000 = 2 seconds
  } 
}
userData.askToFriend() 

/*below, using an arrow function with getBio method. when getBio() is called, returns User undefined is a undefined.  this is so because 
arrow functions have a lexical 'this'. not getting property username and title from userData object but instead getting from whatever 
'this' is set to from scope above. if i log 'this' in the global scope, console.log(this), i get Window. which means, program attempting 
to get username and title properties off of the window. and if a property can't be found on a given object, it returns undefined. 

so arrow functions are great if they have a context, like that of the askToFriend method above. arrow functions cannot be used to create
a new 'this' binding.   */
const userData = { 
  username: "Reed",
  title: "JavaScript Programmer",
  getBio: () => {
    console.log(`User ${this.username} is a ${this.title}`)  //returns User undefined is a undefined
  },
  askToFriend() {
    setTimeout(() => {
      console.log(`Would you like to friend ${this.username}?`)    
    }, 2000)   
  } 
}
userData.getBio()  //calling getBio 
console.log(this) //returns Window