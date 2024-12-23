// Class     grade    point
// 96-100	    A+	    5.00
// 80–100	    A+	    5.00	
// 70-79	    A	    4.00	          
// 60–69	    A-	    3.50	
// 50–59	    B	    3.00	
// 40–49	    C	    2.00	
// 33-39	    D	    1.00	
// 0-32	        F	    0.00
const forloop = document.getElementById('for')
Num1 = +prompt("Enter your marks");

for (let i = 1; i <= 10; i++) {
    forloop.innerHTML += `${i} X ${Num1} = ${i * Num1} </br>`
}


// while loop
const whileloop = document.getElementById('while')
let Num2 = +prompt("Enter your marks");

let i = 1;
while (i <= 10) {
    whileloop.innerHTML += `${i} X ${Num2} = ${i * Num2} </br>`
    i++
}

// // Do while loop
const Dowhileloop = document.getElementById('while')
let Num3 = +prompt("Enter your marks");
i=1;
do{
    whileloop.innerHTML += `${i} X ${Num3} = ${i * Num3} </br>`
    i++
}
while(i<=10)