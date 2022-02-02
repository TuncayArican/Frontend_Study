/* let count=0;
let letter="a"
function letterCount(word){
    for (let i = 0; i < word.length; i++) {
        if (word[i] == letter) {
            count++
        }
    }return count;
}
console.log(letterCount("arabada")); */


/* let word="Tuncay arıcan"
let letter="a"
let count=0
for (let i = 0; i < word.length; i++) {
    if (word[i] == letter) {
        count++
    }
} 
console.log(`${word} kelimesinde ${letter} harfi ${count} tane vardır`) */
let count=0;
let word=prompt("Please enter a word")
let letter=prompt("Please enter a word")

function letterCount(word){
    for (let i = 0; i < word.length; i++) {
        if (word[i] == letter) {
            count++
        }
    }return count;
}
console.log(letterCount(word));