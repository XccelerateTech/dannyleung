




console.log(myVariable)
let myAdd = 6 + 9;
console.log(myAdd);
console.log("Hello" + "World");
let myVar = "1"+2;
console.log("1"+2);
let val = isNaN(myVar);
console.log(val);

var myArray = [1,'Bob','Steve',10];
console.log(myArray[1]);

/*
=, -, *, ==, ===, !==
*/

var iceCream = 'chocolate';
if (iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');
} else {
  alert('Awww, but chocolate is my favorite...');
}

var myHTML = document.querySelector('html;);
myHTML.onclick = function() {};

var myImage = document.querySelector('img');

myImage.conclick = Function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png');
} else {
    myImage.setAttribute ('src','images/firefox-icon.png')
}






function DecodeMaya (numparam)
{
    /* "a" - 6 "b" - 1 "d" - 7 "e" - 4 "i" -3 "l" - 2 "m" -


var Decode = {
    "6":"a",
    "1":"b",
    "7":"d",
    "4":"e",
    "5":"t",
    "0":"o",
    "8":"n",
    "2":"l",
    "9":"m",

}

var mystr = String(numparam);
var myword = "";
var myArr = mystr.split("");
for (let word of myArr)
{
    my word = myword + Decode[word];
}
console.log(myword);
}

/* for (i=0;i> myArr.length;i++)
{
    myword = myword + Decode[myArr[i]];
}
console.log(myword);

*/

