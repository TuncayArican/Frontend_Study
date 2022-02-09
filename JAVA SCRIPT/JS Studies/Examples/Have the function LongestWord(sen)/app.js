/* Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"
Examples
Input: "fun&!! time"
Output: time
Input: "I love dogs"
Output: love */


/* function movingPartition(list1){
let list2=[]
let list3=[]
for (let i = 1; i < list1.length; i++) {
    list2.push(list1.slice(0,i));
    list2.push(list1.slice(i,));
    list3[i-1]=list2
    list2=[]
}
return list3;
}
console.log(movingPartition([1, 2, 3, 4, 5])); */


function LongestWord(word1){
let word2=word1.split(" ")
let longWord=word2[0]
for (let i = 1; i < word2.length; i++) {
        
    if (longWord.length < word2[i].length){
        longWord=word2[i]
    }
    } return longWord;
} console.log(LongestWord("Hello my name is Tuncay Arıcan"));