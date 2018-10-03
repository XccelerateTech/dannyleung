//Method One
// var TwoFer = function () {}; //Declare function

// TwoFer.prototype.twoFer = function (who) { //TwoFer variable becomes constructor through use of prototype. constructs function twoFer. twoFer is a function that takes input (who)
// if (typeof who === 'undefined') {
//   return 'One for you, one for me.';
// } else { 
//   return 'One for ' + who + ', one for me.';
// }
// };


//Method Two arrow syntax
// var TwoFer = function () {}; //Declare function
// TwoFer.prototype.twoFer = (who) => { //Same constructor (using prototype)
// if (typeof who === 'undefined'){
//   return 'One for you, one for me.';
// } else {
//   return 'One for ' + who + ', one for me.';
// }

// };

//method three
// class TwoFer { //declare the class TwoFer
//   constructor(who){ //construct the class TwoFer and pass input ('who'/ if any): you can only have one constructor (it can take multiple inputs)
//     this.who = who; // class body  (if the class takes inputs, and you want to pass them to a function, declare them with 'this' which helps to define function context)
//   }
//   twoFer(who) { //class method (you can make multiple methods) the method takes the input who, and returns one of two results
//     if (typeof who === 'undefined'){ //method definitions
//       return 'One for you, one for me.';
//     } else {
//       return 'One for ' + who + ', one for me.';
//     }
//   }
// }

// let twoFer = new TwoFer ('who');
// twoFer.twoFer()



module.exports = TwoFer;
