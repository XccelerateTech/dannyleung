/* Exercise H Create a function called calculator( ). 
The function should take three arguments 
- operation(string), value1(number), value2(number). 
The function should return result of numbers after applying 
the chosen operation. This question involves the 
concept of conditional. Read the section Conditional 
Before attempting this question.

 calculator('+', 5, 9) // 14
 calculator('-', 7, 3) // 4
 calculator('*', 5, 5) // 25
 calculator('/', 9, 3) // 3

*/

function calculator(aa, bb, cc) {

    if (aa === '+') {
        return bb+cc; 
    }
    else if (aa === '-') {
        return bb-cc;
    }
    else if (aa === '*') {
        return bb*cc;
    }
    else {
        return bb/cc;
    }

}
   
