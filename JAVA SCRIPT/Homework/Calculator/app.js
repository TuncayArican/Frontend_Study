let number1=+prompt("Please enter your number")
let number2=+prompt("Please enter your number")
let operator=prompt("Please enter the operator you want to choose (+ - * /)")
switch (operator) {
    case "+":
        result = number1 + number2
        
    break;
    case "-":
        result = number1 - number2
        
    break;    
    case "/":
        result = number1 / number2
        
    break;
    case "*":
        result = number1 * number2
        
    break;
    default:
        text ="Are you sure you chose the correct operator?";
        console.log(text);
        break;
}
    console.log(`The numbers you choose are ${number1} and ${number2}. You used the operator : ${operator} and the result is ${result} `);



