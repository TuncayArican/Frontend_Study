/* Purpose of the this coding challenge is to write a code that given a number, returns the corresponding
Fibonacci number.
Learning Outcomes
At the end of the this coding challenge, students will be able to;
analyze a problem, identify and apply programming knowledge for appropriate solution.
demonstrate their knowledge of algorithmic design principles by using JavaScript effectively.
Problem Statement
Create a function that, given a number, returns the corresponding Fibonacci number.
Examples:
fibonacci(7) ➞ 21
fibonacci(12) ➞ 233
The first number in the sequence starts at 1 (not 0). */


/* (1,2,3,5,8,13,21) */
let list1=[1,2]
let sum=2
let number=+prompt("Please enter the line number");
function fibo(number){
    if(number==1){
        console.log(1);
    }else{
        for (let i = 0; i<number-2; i++) {
        sum+=list1[(list1.length-2)];
        list1.push(sum)
        }
        console.log(list1[(list1.length-1)]);
        }
}
fibo(number)
