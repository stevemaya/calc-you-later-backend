/******************
 * YOUR CODE HERE *
 ******************/
function calculate(num1, num2, operation) {
  num1 = Number(num1);
  num2 = Number(num2);
switch(operation) {
  case '+':
  case 'plus':
  case 'added to':
    return num1 + num2;
    break;
  case '-':
  case 'minus':
  case 'subtracted from':
    return num1 - num2;
    break;
  case 'x':
  case 'X': 
  case 'times':
  case 'multiplied by':
    return num1 * num2;
    break;
  case '/':
  case 'divided by':
    return num1 / num2;
    break; 
  case '%':
  case 'modulus':
  case 'mod':
    return num1 % num2; 
    break;
  default:
    return "Sorry, that's not a mathematical operation!";
}
}
/* finally I got the switch statements down
woohooo!!!!!
*/ 
/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof calculate === 'undefined') {
  calculate = undefined;
}


module.exports = calculate;