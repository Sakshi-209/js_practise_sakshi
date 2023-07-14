var num1=prompt("enter the first number");
var num2=prompt("enter the second number");
var str=prompt("enter the arithmetic operator");
switch (str){
    case "add":
        alert(num1+num2);
        break;
    case "subtract":
        alert(num1-num2);
        break;
    case "multiply":
        alert(num1*num2);
        break;
    case "divide":
        alert(num1/num2);
        break;
    case "modulus":
        alert(num1%num2);
        break;
    default:
        alert("The operator is not valid");
}