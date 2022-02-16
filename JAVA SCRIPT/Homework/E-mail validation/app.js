/* Purpose of the this coding challenge is to write a code that given email adresses, returns the emails valid or invalid.

- Valid email addresses must follow these rules:

1. It must have the username@websitename.extension format type.
1. The maximum length of the extension is 3. */

let button = document.getElementById("button")
let word = document.getElementById("mail");
let h1 = document.getElementById("h1");
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
   if (word2.length !== 0) {
    let y=word3.indexOf(".")
    let y1= word3.slice(0,y)
    let y2=word3.slice(y+1)
    if (y1.length!==0 & (y2.length==2 || y2. length==3)) {
        h1.innerText="Valid";
    } else {
        h1.innerText="Invalid";
    }
   } else {
    h1.innerText="Invalid";
}
}else{
    h1.innerText="Invalid";
}}

button.addEventListener("click", ()=>{
    console.log(word.value);
    email(word.value)
})



