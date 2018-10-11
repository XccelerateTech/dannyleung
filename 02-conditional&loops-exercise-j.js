//J
// Write a function that expects a number as a parameter. If the value that is entered is less than 0, equal to 0, or not a number, the function should return the string 'ERROR'. If the number that is entered is greater than or oequall to 1000000 it should simply return the number. Otherwise it should multiply the number by 10 however many times it takes to get a number that is greater than or equal to 1000000 and return that.

// if !number or <=0 = ERROR
// else if >=1000000 = output
// else if >1000000 = output
// else while >1000000 *10

// if !number or <=0 = ERROR
// else if >=1000000 = output
// else while >1000000 *10

var input = {
    a: -1,
    b: 0,
    c: 0.5,
    d: "dud",
    e: " ",
    e: "16",
    f: 1000001,
    g: "1,000,001",
    h: 1000000,
    i: 999999,
    j: 123
  }
  
for (var p in input){
    
    if ((Number.isInteger(input[p]) === false) || (input[p] <= 0)) {
        console.log ('Input ' + p + ' gives ERROR');
    
    } else if (input[p] >=1000000) {
        console.log ('Input ' + p + ' gives ' + (input[p]));
    } else if (input[p] < 1000000) {
        
        while (input[p] < 1000000) {
            input[p] = input[p] * 10
        }
        console.log (input[p]);
    }
}



