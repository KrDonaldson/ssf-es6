//assign fizzBuzz30 an arrow function that does not take any inputs.  fizzBuzz30 should output an array of all the numbers from
//1 through 30 replacing numbers divisible by 3 with 'fizz', numbers divisible by 5 with 'buzz' and numbers divisible by 3 and 5 with
//'fizzbuzz'

let fizzBuzz30 = () => {
    var numberArray = [];
    for (var i=1; i<= 30; i++) {
        var message = "";
        if (i%3 == 0) {
            message += "fizz";
        }
        if (i%5 == 0) {
            message += "buzz";
        }
        numberArray.push (message || i);
    }
    return numberArray;
}








//Do not edit
module.exports = fizzBuzz30;