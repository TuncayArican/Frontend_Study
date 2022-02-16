/* Purpose of the this coding challenge is to write a code that given email adresses, returns the emails valid or invalid.

- Valid email addresses must follow these rules:

1. It must have the username@websitename.extension format type.
1. The maximum length of the extension is 3. */

let button = document.getElementById("button")
let tuncay = document.getElementById("mail");
let word1;
word1=tuncay.value;
console.log(tuncay.innerText);
let count=0;

function email(word5){ 
for (let i = 0; i < word5.length; i++) {
    if (word5[i]=="@") {count++        
    }   
}
if (count==1) {
   let x=word5.indexOf("@")
   let word2= word5.slice(0,x)
   let word3=word5.slice(x+1)
   console.log(x);
   console.log(word2.length);
   console.log(word3);
   if (word2.length !== 0) {
    let y=word3.indexOf(".")
    let y1= word3.slice(0,y)
    let y2=word3.slice(y+1)
    if (y1.length!==0 & (y2.length==2 || y2. length==3)) {
        alert("valid");
    } else {
        alert("invalid");
    }
   } else {
    alert("invalid");
}
}else{
    alert("invalid");
}}

button.addEventListener("click", ()=>{
    email(word1)
})



