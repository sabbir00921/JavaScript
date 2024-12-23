let num1 = +prompt("Enter 1st Number");
let num2 = +prompt("Enter 2nd Number");
let num3 = +prompt("Enter 3rd Number");
let Operation = prompt(`Select Operation \n 1. for addition \n 2. for subtraction \n 3. for multiplication \n 4. for division`);

function calculator(a, b, c) {
    switch (Operation) {
        case "1":
            console.log(a + b + c);
            break;
        case "2":
            console.log(a - (b - c));
            break;
        case "3":
            console.log(a * b * c);
            break;
        case "4":
            console.log(a / (b / c));
            break;
        default:
            console.log('Invalid operation');
            break;
    }
}

calculator(num1, num2, num3);
