//CONDITIONS

/* if (score>51){
    console.log("Congrats! you have passed");
}else if (score>=45 && score<=50){
    console.log("You nearly failed");
} else{
    console.log("you have failed");
} */
/*  
let score=49;
if (score>50) {
    if (score>80) {
        console.log("you are a great student");
    } else{
        console.log("You have passed");
    }
}else{
    console.log("you have failed");
} */


//LOOPS

/* let sum=0;
let i =0;
while (i<10) {
    sum+=i
    i+=2
}
console.log(sum); */ 

/* let i;
let sum=0;
while (true) {
    i=prompt("Please enter a number. Please type q for quit")
    if (i == "q") {
        break;
    }else 
     sum+=Number(i)
}
console.log(sum) */

/* let i=0;
for (i; i<8; i++) {
    if(i==5) continue;
    console.log(i);   
} */

/*  while (true) {
     let x = prompt (`Bir sayı giriniz: \n q ile çıkış yapınız`);
     if( x == 'q'){
         console.log('Çıkış yapıldı');
         break;
     } else if(isNaN(x)){
         continue;
     } else {
         console.log(`${x}'in karesi = ${x*x}`);
     }
 } */


//FUNCTIONS

/* function first(name) {
    return ("hello" +" "+name)
}
console.log(first("tuncay")); */

/* function multiple(a){
    return a**3;
}
console.log(multiple(6)); */
/* 
function mult2(a){
    return a*2
}
 console.log(mult2(5));
 
 function add2(a,b){
     return a+mult2(b)
 }
 console.log(add2(5,8)); */
/* 
 function factoriel(a) {
    let sum=1;
        if (a == 1) {
            sum=1
        }else {
            sum*=a*factoriel(a-1);   
        }
        return sum
            
 }
 console.log(factoriel(6)); */
