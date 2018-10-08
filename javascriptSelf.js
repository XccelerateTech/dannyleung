var DnaTranscriber = require('./rna-transcription');
var dnaTranscriber = new DnaTranscriber();

describe('toRna()', function () {
  it('transcribes cytosine to guanine', function () {
    expect(dnaTranscriber.toRna('C')).toEqual('G');
  });

  it('transcribes guanine to cytosine', function () {
    expect(dnaTranscriber.toRna('G')).toEqual('C');
  });

  it('transcribes adenine to uracil', function () {
    expect(dnaTranscriber.toRna('A')).toEqual('U');
  });

  it('transcribes thymine to adenine', function () {
    expect(dnaTranscriber.toRna('T')).toEqual('A');
  });

  it('transcribes all dna nucleotides to their rna complements', function () {
    expect(dnaTranscriber.toRna('ACGTGGTCTTAA'))
      .toEqual('UGCACCAGAAUU');
  });

  it('correctly handles completely invalid input', function () {
    expect(function () { dnaTranscriber.toRna('XXX'); }).toThrow(
      new Error('Invalid input')
    );
  });

  it('correctly handles partially invalid input', function () {
    expect(function () { dnaTranscriber.toRna('ACGTXXXCTTAA'); }).toThrow(
      new Error('Invalid input')
    );
  });
});

------------------------------------------------------

* `G` -> `C`
* `C` -> `G`
* `T` -> `A`
* `A` -> `U`

----------------------------------------------------------

var helloFrom = function (personName) {
    return "Hello from " + personName;
}

var people = ['Tom', 'Yoda', 'Ron'];

people.push('Bob');
people.push('Dr Evil');

people.pop();

for (var i=0; i < people.length; i++) {
    var greeting = helloFrom(people[i]);
    alert(greeting);
}

---------------------------------------------

ADDING CHARACTERS TO END OF STRING

var myString = "Hello ";
myString += "World";
myString += "!";


-------------------------------------

REMOVING LAST CHARACTER OF STRING

var str = "12345.00";
str = str.slice(0, -1); 

---------------------------------

"Hello world!".split('')
["H", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d", "!"]

------------------------------------


CHECKING THE LENGTH OF THE STRING

<!DOCTYPE html>
<html>
<body>

<p>Click the button to return the number of characters in the string "Hello World!".</p>

<button onclick="myFunction()">Try it</button>

<p id="demo"></p>

<script>
function myFunction() {
    var str = "Hello World!";
    var n = str.length;
    document.getElementById("demo").innerHTML = n;
}
</script>

</body>
</html>




-----------------------------------------

Exercisim solution oct 4, 2018

var Decode = {
    'C':'G',
    'G':'C',
    'A':'U',
    'T':'A'
};

class DnaTranscriber {
    constructor (input) {
        this.input = input;
    }

    toRna (input) {
        let arr = input.split('');
        let output = '';
        for (let val of arr) {
            if (Decode[val] !== undefined) {
                output += Decode[val];
            } else {
                throw new Error ('Invalid input');
            }
        }
        return output;
    }
}

---------------------------------------

compute the prime factors of a given natural number.
A prine number is only evenly divisible by itself and 1.
var primeFactors = require('./prime-factors');

//solution for above quiz

module.exports = {
  for: function(num) {
      var factors = [];
      var quotient = num;
      var factor =2;
      while(quotient !=1){
          if(quotient % factor === 0) {
              factors.push(factor);
              quotient /= factor;
              factor = 2;
          } else {
              factor ++;
          }
          }
          return factors
      }
  }
}


----------------------------------------




var array = [1,2,3,4,5];

//forEach()

array.forEach(function(n){
  console.log(n+1);
});
// will return 2,3,4,5,6

//  array.forEach(function(n){
//    return (n+1);
//  });
//  //will only give first result = 2

//map()

var timeTen = array.map(function(n) {
  return n*10;
});
console.log(timesTem);
// because using MAP, the 'return' will give the whole array which is 5 results [10,20,30,40,50]

var timesThree = array.map(function(n) {
  return n*3;
});

---------------------------------

var policeForce = [
    { species: 'human', description: 'smart', name: 'John'},
    {species: 'dog', description: 'below average', name: 'bark'},
    {species: 'dog', description: 'average', name: 'woooff'}
    
  ]
  
  var resultHuman = policeForce.filter (function(element) {
    return element.species === 'human';
  })
  
  var resultDog = policeForce.filter (function(element){
    return element.species !== 'human'
  })
  
  var resultDog = policeForce.filter (function(element){
    return element.name !== 'Jeremy'
  })
  console.log(resultHuman)

  --------------------------------

  var policeForce = [
    { species: 'human', description: 'smart', name: 'John'},
    {species: 'dog', description: 'below average', name: 'bark'},
    {species: 'dog', description: 'average', name: 'woooff'}
    
  ]
  
  var resultHuman = policeForce.filter (function(element) {
    return element.species === 'human';
  })
  
  var resultDog = policeForce.filter (function(element){
    return element.species !== 'human'
  })
  
  var resultDog = policeForce.filter (function(element){
    return element.name !== 'Jeremy'
  })

  console.log(policeForce[0].name)

---------------------------

var array = [1,2,3,4,5];

var sum = array.reduce (function (acc, number) 
{ return acc + number; },0)

console.log(sum)
//result is 15

--------------------------------

var array = [1,2,3,4];

var sum = array.reduce (function (acc, number) 
{ return acc + number; },0)

console.log(sum)
//result is 10

--------------------------------

var array = [1,2,3,4];

var sum = array.reduce (function (acc, number) 
{ return acc + number; },5)

console.log(sum)
//result is 15


-------------------------------

var accelerateStudent = {
    name: "Gordon Lau", // name is the PROPERTY or KEY and "Gordan Lau" is the VALUE
    course: "Full immersive web dev", // name and course have STRING VALUES
    enrollmentStatus: true, // the value of enrollmentStatus is a BOOLEAN
    greet: function() { // greet is a METHOD, more on this later
        return "Hello!"
    }
}


Let’s take a look at how this object is defined. We have our variable accelerateStudent.

We assign it the value of an object by using the curly braces, { }. 
This is called literal notation.

Inside the curly braces are four properties for our accelerateStudent object: name, course, enrollment status, and greet.

Every property of a JavaScript object consists of a key-value pair.

The key is the variable that describes the kind of information to be stored.
The value is the specific value of the key

Each key-value pair is separated by a colon.
And pairs are separated from each other with a comma.

----------------------------

Dot notation

Properties
Dot Notation
You can access the properties of an object with a dot-notation: objectName.propertyName

var accelerateInstructor = {
    name: "Gordon Lau"
}

accelerateInstructor.name // this returns "Gordon Lau"
Bracket Notation
You can access the properties of an object with a bracket-notation: objectName['propertyName']

var accelerateInstructor = {
    name: "Michael Fung"
}

accelerateInstructor['name'] // this returns "Michael Fung"
Bracket-notation allows you to create properties with spaces, and is the only way to access a property that has spaces.


Some key points
Each key and value needs to be seperated with a colon :
Each key-value pair should be seperated with a comma , and ideally be on a new line
Like all JavaScript variables, both the object name and property name are case sensitive.
Properties that haven’t been assigned to an object return undefined (and not null).
accelerateInstructor.favouriteDrink; // this returns undefined


---------------------------

Methods
Methods are functions stored within an object.   They have a function name (the method name) and the function itself.

var drumbeats = 0;
var drumkit = {
    bass: function(){
        drumbeats++;
        return "the drum goes boom!"
    },
    cymbals: function() {
        drumbeats++;
        return "the cymbals go clang!"
    }
}

drumkit.bass(); // when you run drumkit.bass() it will add one to the drumbeat
                // variable and return "the drum goes boom!"
drumbeats;
// returns 1 , drumbkit.bass() has caused drumbeats to increase by one
drumkit.cymbals();
// return "the cymbals go clang!"
drumbeats;
// returns 2 , drumbkit.cymbals() has caused drumbeats to increase by one again

----------------------------------

Creating objects
You can create your own objects in three main ways.  

You can create an object using literal notation. e.g. var accelerateStudent1 = {}

Or with an object initializer. e.g. var myObj = Object()

Alternatively, you can first create a constructor function with the new keyword e.g. var myCar = new Object() 

Literal notation as it is the most common way of creating objects so let’s focus on learning this way first. Here’s an example:

var baby = {            
    hairColor: "brown",
    months: 8,
    gender: "female"
}

// after we've declared (created) the variable baby, we can access the properties.
// Remember var is only needed when we declare variables.
baby.hairColor // "brown"
baby.months // 8
Here’s a quick example of the use of the constructor function.

var myCar = new Object(); 
myCar.make = 'Ford';
myCar.model = 'Mustang';
myCar.year = 1969;
Adding and accessing properties
You can properties to an object either through dot notation or bracket notation.

var obj = {};

// adding properties
obj.property = "something"; // dot notation
obj["otherProperty"] = "something else" // bracket notation
obj.method = function() {
    return "something else again";
}

// Accessing object properties and methods
obj["property"] // "something"
obj.otherProperty // "something else"
obj.method() // "something else again"
Deleting properties
To delete an object property use the delete operator

var person = {
    height : 175,
    weight: 65
}

delete person.height;
Examples of nested objects
Given the ourClass object, how can we return jimmy’s background and corah’s studied property?

var ourClass = {
    students: {
        jimmy: {
            background:"accountant",
            studied:"USA"
        },
        corah: {
            background:"student",
            studied:"HK"
        }
    }
}
We can go one level into ourClass object by accessing the students property

//ourClass.students or ourClass['students'], returns
{ 
    jimmy: {
        background: 'accountant',
        studied: 'USA'
    }, 
    corah: {
        background: 'student',
        studied: 'HK'
    } 
}

We can dive one level deeper by specifying jimmy or corah

//ourClass.students.jimmy or ourClass['students']['jimmy'], returns
jimmy: {
    background: 'accountant',
    studied: 'USA'
}
            
//ourClass.students.corah or ourClass['students']['corah'], returns
corah: {
    background: 'student',
    studied: 'HK'
} 
Finally we can get the most deeply nested properties by specifying background or studied

ourClass.students.jimmy.background; // returns "accountant" using dot-notation
ourClass['students']['corah']['studied']; // returns "HK" using bracket-notation
ourClass['students'].jimmy['studied']; // returns "USA" using a mix of dot and bracket notation

-----------------------------

Arrays
Arrays are objects that can be used to store lists of items.   The items may be of any type and each one can be accessed using its index - its position in the array.

var array = [88, 'hello', {}];

array[0] // index 0 of array returns 88 
array[2] // index 2 of array returns {}
Note how the index starts at 0, not 1.

Arrays have a length property that indicate how many items are in the array.

var cities = ['Hong Kong', 'Beijing', 'Shanghai'];
cities.length // 3
The length property automatically updates when we modify the array.   To be precise, it is actually not the count of values in the array, but the greatest numeric index plus one.

For instance, a single element with a large index gives a big length:

let fruits = [];
fruits[123] = "Apple"; // we are setting index 123 of fruits to apple 

console.log( fruits.length ); // the total length of the fruits array is 124
Another interesting thing about the length property is that it’s writable.

If we increase it manually, nothing interesting happens.  But if we decrease it, the array is truncated.   The process is irreversible, here’s the example:

let arr = [1, 2, 3, 4, 5]; // arr.length would be 5

arr.length = 2; // truncate to 2 elements
console.log( arr ); // [1, 2]

arr.length = 5; // return length back to the original length of 5
console.log( arr[3] ); // undefined: the values do not return
The simplest way to clear the array is: arr = [] but you can also clear it with: arr.length = 0.

---------------------------------------

Adding To Arrays
push & unshift
To add to an array use the push method or unshift method.   push will add to the end of the array while unshift will add at the beginning of the array.

var fruits = ['mango', 'banana'];
fruits.push('apple'); // fruits = ['mango', 'banana', 'apple']
fruits.unshift('papaya'); // fruits = ['papaya', 'mango', 'banana', 'apple']

---------------------------------------

Removing From Arrays
pop & shift
To remove and return elements from an array you can use shift for the first item or pop for the last item of an array.

var vegetables = ['pumpkin', 'potato', 'spinach', 'tomato'];
vegetables.pop() // tomato
vegetables.shift() // pumpkin

If you want to remove items in the middle of an array you can use splice.   The method takes as it’s first parameter the index at where the removal should start.   The second parameter indicates how many elements should be removed.   If left empty all elements from the index to end will be removed.   Any parameters following the first two, will be inserted instead of the removed elements.   If left empty nothing will be added.

var arr = [1, 2, 3, 4, 5, 6, 7, 8];

arr.splice(2, 3, 'removed something here'); 
// here we are removing 3 items from the array (second parameter) starting at index 2 (first parameter) 
// and replace it with 'removed something here' (third parameter)

arr // [1, 2, 'removed something here', 6, 7, 8]

arr.splice(0, 2);

arr // ['removed something here', 6, 7, 8]

--------------------------------------------

Converting Arrays to Strings
toString
Arrays have their own implementation of toString method that returns a comma-separated list of elements.

For instance:

let arr = [1, 2, 3];

alert( arr ); // 1,2,3
alert( String(arr) === '1,2,3' ); // true
alert( arr.toString() === '1,2,3' ); // true - gives out the same result as String(arr)

Some key points
The first element of an array is at index 0 arr[0] // will return the first element
The length of an array is its greatest index plus one
You can add elements to the array with the .push() method
You can remove the last element of the array with the .pop() method
You can remove the first element of the array with the .shift() method
You can remove elements from the middle of the array with the .splice() method

--------------------------------

Sort
You can sort an array by using the sort(compareFunction) method.   If you do not provide the compareFunction , JS will try to compare the value using the natural order which is the string representation of each element.

let arr = [5,8,"abc"];

arr.sort();
arr.sort(function(first, second){
    return second > first;
});

// returns: => [ 8, 5, 'abc' ]

------------------------------------


Slice
You can also get part of the array using slice(start,end).   Please note that the element at index end is not included.

let arr = ["ghi","def","abc","xyz"];

arr.slice(0,2); // ["ghi","def"];
arr.slice(1,3); // ["def","abc"];
arr.slice(1,4); // [ 'def', 'abc', 'xyz' ]


------------------------------------

let myArr = [1,2,3]

myArr.push(4);
// will add 4 to the end of the array so now it is 1,2,3,4

myArr.push("Hello");
// will add Hello to end of array --> 1,2,3,4,Hello
myArr.pop();
// will remove last item on the array --> 1,2,3,4
myArr.reverse();
// will reverse the order of the array --> 4,3,2,1
var joinedStr = myArr.join("");
// will take info from array into string --> 4321
// printthis(joinedStr); --> this is now a STRING
printthis(Number(joinedStr));
// this will make string back into a number --> "printing number value is 4321"


let myArr = [5,8,2,1,6];
myArr.push(4);
myArr.sort();
--> result: 1,2,4,5,6,8


-----------------------------------

var Decode = {
    '1':'A',
    '2':'B',
    '3':'C',
    '4':'D',
    '5':'E',
    '6':'F',
    '7':'G',
    '8':'H',    
    '9':'I',
    '0':'J'
  }

function transform(str) {
  let myArr = str.split('');
  myArr.sort();
  let myword ='';
  for (let word of myArr) {
    myword = myword + Decode[word];
  }
return myword;
}

let ans = transform(01234);
printthis.transform;

-------------------------------

let myDecode = {
    123: "1",
    "234": 2,
    567: 3,
  
    hello: function () {
      return 'hello function';
    }
  }
  printthis(myDecode[123]); // printing string value is 1
  printthis(myDecode["234"]); // printing number value is 2
  
  printthis(Decode.hello()); //printing string value is hello function
  printthis(Decode.hello); // printing fuction value is function

  --------------------------------

  var drumbeats = 0;
var drumkit = {
  bass: function(){
    drumbeats++;
    return "the drum goes boom!"
  },
  cymbals: function() {
    drumbeats++;
    return "the cymbals go clang!"
  }
  }

drumkit.bass(); //when you run drumkit.bass() it will add one to the drumbeat --> 'the drum goes boom!'


//Terminology
// CLASS - the blueprint of instances thatyou want to create
// CONSTRUCTOR - the function that is being called when the instance is created
// PROTOTYPE - the proto-object that is shared by all its instances
// INSTANCE - represent each individual piece of Data
// OBJECT - a synonym with instance

------------------------------------

CompositionEvent - only part of the 

class BaseFlying {
    constructor(type){
        this.type = type;
    }
    burrow() {
        console.log('A ${this.type} can burrow')
    }
}

class BaseFlying {
    constructor(type){
        this.type = type;
    }
    burrow() {
        console.log('A ${this.type} can fly')
    }
}

class BaseFeed {
    constructor(type){
        this.type = type;
    }
    burrow() {
        console.log('A ${this.type} can milk')
    }
}


class partthis.flyer = new BaseFlying {
    var pelican = new Pelican ();
    pelican.fly();
    pelican.lay();
}

class Pelican {
    constructor(){
        this.flyer = new BaseFlying('Pelican')
        this.lay = new BaseLaying('Pelican')
    }
}


var pelican = new Pelican ();
pelican.fly();
pelican.lay();


----------------------------

day 08

object-oriented programming
interaction with objects

difference between class and object
class is template which objects is substantiated

What is a constructor:
a function that gets automatically called when you substantiate the object in a class
every class should have a constructor
to initialize things

------------------------------
Day 08 AJAX & DOM & EventSource

Asynchronous: multi-thread operations: example:

Synchronous: works well but takes a long time

in programming: read/writing from database takes a very long time

looping is synchromus

AJAXShrot for of Asynchronous Javascript & XMLHttpRequestS

~~~~~~~~~~~~~~~~~~~~~~~

AJAX in Action

var http= new XMLHttpRequest();
http.open("GET", "data/file.json")

http.onreadystatechange = function() {
    if(http.readyState != XMLRequest.DONE) {
        return;
    } else if(http.status == 200) {
        console.log(http.responseText);
    } else{
        console.log('error occurred' + http.status');
    }
}

// onreadystatechange should be before http.send()
http.send();

~~~~~~~~~~~~~~~~~~~~~~~~~~~~

HTTP Methods
GET - to get something from Server (semantically)
POST - to create something new in Server
PUT - To create or update something in Server
DELETE - to delete something in Server

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

AJAX http.readyState
1. XMLHttpRequest.UNSENT == 0
2. XMLHttpRequest.OPENED == 1
3. XMLHttpRequest.HEADERS_RECEIVED == 2
4. XMLHttpRequest.LOADING == 3
5. XMLHttpRequest.DONE == 4

AJAX in Action (orders)

var http = new XMPHttpRequest();

console.log("Step 1")
http.open("GET", "/data/file.json")
console.log("Step 2");
http.onreadystatechange = function() {
    console.log("Step 5")
    if (http.readyState != XMLHttpRequest.DONE) {
        return;
    } else if(http.status == 200) {
        console.log("Step 6")
        console.log(http.responseText);
    } else {
        console.log('error occurred' + http.status);
    }
}
console.log("Step 3");


~~~~~~~~~~~~~~~~~~~~~~~

JSON
- Shorthand for Javascript Object Notation
- Natively supported in Javascript

                        Javascript Object
 JSON.stringify()  (Count clockwise circle)  JSON.parse()
                        JSON String



















