// Exercise H: Create a function called calculator(). The function should take three arguements - operation(string), value1(number), value2(number). The function should return result of numbers after applying the chosen operation. This question involves the concept of conditional. Read the section Conditional Before attempting this question.

function calculator(operation, value1, value2) {
    if (operation == '+') {
      var output = value1 + value2;
      console.log (output);
    } else if (operation == '-') {
      var output = value1 - value2;
      console.log (output);
    } else if (operation == '*') {
      var output = value1 * value2;
      console.log (output);
    } else if (operation == '/') {
      var output = value1 / value2;
      console.log (output);
    } else {
      throw new Error('Incorrect input');
    }
  }

calculator('+', 5, 9); // 14
calculator('-', 7, 3); // 4
calculator('*', 5, 5); // 25
calculator('/', 9, 3); // 3
calculator('x',1,2);

// ~~~~~~~~~~~~~~~
// BONUS EXERCISE
// The function below is not working properly, can you fix it?

//Given:
//  function area(height width) {
//  height * width;
//  }
// ~~~~~~~~~~~~~~~
// SOLTUION - missing comma between 'height, width'
// ANS: function area(height, width) {