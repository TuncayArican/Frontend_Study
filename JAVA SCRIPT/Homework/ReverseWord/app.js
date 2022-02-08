/* - Write a function that takes an array of characters and reverses the letters in place.

- Examples:

  - reverse("Clarusway Rocks!") ➞ !skcoR yawsuralC

  - reverse("Happy") ➞ yppaH */

/* function reverseWord(word){
      let word2=word.split("").reverse().join("") 
      return word2
}
console.log(reverseWord("Clarusway Rocks!")); */

function reverseWord(word){
    let word2=""
    for (let i= word.length-1; i>=0 ; i--) {
        word2+=word[i]
    } return word2
}
console.log(reverseWord("Clarusway Rocks!"));

