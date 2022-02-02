/* Write a function that returns an anonymous function, which transforms its input by adding a particular suffix at the end.
Examples
add_ly = add_suffix("ly")

add_ly("hopeless") ➞ "hopelessly"
add_ly("total") ➞ "totally"

add_less = add_suffix("less")

add_less("fear") ➞ "fearless"
add_less("ruth") ➞ "ruthless" */

/* let word = prompt("Please enter a word")
let add1 = prompt("Please enter the addition")
function addWord(word1){
    word2=word1+add1
    return word2
}
console.log(addWord(word)); */



//How Much is True?
//countTrue([true, false, false, true, false]) ➞ 2

// countTrue([false, false, false, false]) ➞ 0

// countTrue([]) ➞ 0

/* let list1=[true, false, false, true, false]
let count=0;
function countTrue(list2){
    for (i=0; i<list1.length; i++){
        if (list2[i]== true){
        count++
        }
    }return count;
}console.log(`The amount of true on the list is  ${countTrue(list1)}`); */





//In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided dice. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.

// Can you reach your friend's tile number in the next roll? Create a function that takes your position a and your friend's position b and returns a boolean representation of whether it's possible to earn a bonus on any dice roll.

// Examples
// possibleBonus(3, 7) ➞ true

// possibleBonus(1, 9) ➞ false

// possibleBonus(5, 3) ➞ fals




/* Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.
 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome. */


let word1=prompt("Please enter a number")
let word2=""
function polidrome(word1){
    for (i=word1.length-1; i>=0 ; i--){
     word2+=word1[i]}
    if (word1==word2) {
        return (`${word1} is  a palindrome`);
    }else{
        return (`${word1} is not a palindrome`);
    }
}console.log(polidrome(word1));
