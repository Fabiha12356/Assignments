//   FUNCTION:_



//ans n0 01:-
// let user = +prompt("enter the number");
// let sum = user+2;

// let addtwo = (word) =>{
//     console.log(sum)
// }
// addtwo();



//ans n0 02 
// let user1 = +prompt("enter the number");

// let check = () => {
//     if(user1 % 2 === 0){
// alert("this is even number")
//     }
//     else{
//        alert("this is odd number"); 
//     }
// }


// check();



//ans n0 03:-

// let user2 = +prompt("enter the number");
// let user3 = +prompt("enter the number");


// let checked = () => {
//     if(user2 > user3){
// alert(`${user2} is greater than ${user3}`)
//     }
//     else if(user3 > user2){
//       alert(`${user3} is greater than is ${user2}`);  
//     }
//     else{
//         alert("write right no!");
//     }
// }

// checked()



//ans n0 04:-

// let user4 = +prompt("enter the number");
// let marks = () => {
//     if(user4 > 40){
// alert(` you are passed 🥳`)
//     }
//     else{
//         alert("fail!");
//     }
// }

// marks();



//ans n0 05:-
// let user5 = +prompt("Type the number");

// let posit_neg = () => {
//     if(user5 > 0){
//         alert(`It  is a postive number`)
//     }
//     else{
//           alert(`It  is a negative number`);
//     }
// }

// posit_neg();


//ans n0 06:-

// let user6 =+prompt("Type the number");
// let users = user6*user6;

// let square = (letter) => {
//     console.log(users)
// }

// square()



//ans n0 07:-

// let user7 = prompt("say something?") .toUpperCase();

// let string = (word) => (word);
// console.log(string(user7));




//ans n0 08:-

// let user8 = prompt("say something?") .toLowerCase();

// let letter = (word) => {
// console.log(user8);
// }



// letter();



//ANS N0 09:-

// let user9 = prompt("say something?");

// let empty = () =>{
//     if(user9 === ""){
//         alert("just write anything");
//     }
//     else{
//           alert("OK!");
//     }
// }


// empty();


//ANS N0 10:-

// let user10 = prompt("say something?");

// let first_char = () =>{
//     console.log(user10[0].toUpperCase())
    
// }

// first_char();



//ANS N0 10 AND 11 :-

// let fruitsName = ["apple" ,"mango" ,"banana" ,"orange" ,"grapes"];


// let first_element = () =>{
//     console.log(fruitsName[0]);
// }

// first_element()



// let last_element = () =>{
//      console.log(fruitsName[fruitsName.length-1]);
// }

// last_element();


// ANS N0 13:-

// let colornames = ["red" ,"blue" ,"green" ,"yellow" ,"purple"];

// let number_count =() =>{
// console.log(`length : ${colornames.length}`);
//     for(let i = 0 ; i < colornames.length ; i++){
//         console.log(`IndexNo : ${i}`);
//     }
// }

// number_count()



// ANS N0 14 and 15:-
let colornames = ["red" ,"blue" ,"green" ,"yellow" ,"purple" ,"pink" ,"orange" ,"brown" ,"black"];


// let get_evenNO = () =>{
// for (let i = 0 ; i < colornames.length ; i++){
//     if(i%2 === 0){
//         console.log(`EVENno : ${i}`);
//     }
// }
// }
// get_evenNO()



// let get_oddNO = () =>{
// for (let i = 0 ; i < colornames.length ; i++){
//     if(i%3 === 0){
//         console.log(`ODDNo : ${i}`);
//     }
// }
// }
// get_oddNO()



// ANS N0 16:-

// let numbers = [1,2,3,4,5,6 ,7,8,9,10,11,12,13,14,15 ,16,17,18,19 ,20]

// let greaterThan = () =>{
//     for (let i = 0 ; i < numbers.length ; i++){
//         if(i > 10){
//             console.log(`Greater than 10 :- ${i}`);
//         }
//     }
// }

// greaterThan()



// ANS N0 17 AND 18 :-

// let largestN0 = () =>{
//     console.log(`Largest NO : ${Math.max(...numbers)}`);
// }

// largestN0();





// let SmallestN0 = () =>{
//     console.log(`SmallestNo : ${Math.min(...numbers)}`);
// }

// SmallestN0();




// ANS N0 19 :-

// let arr = ["fabiha" ,"areeba" ,0 ,"laiba" ,true,20];

// let get_stringOnly = () =>{
//    for(let i = 0 ; i < arr.length ; i++){
//     if(typeof arr[i] === "string"){
//         console.log(arr[i])
//     }
//    }
// }

// get_stringOnly();



// ANS N0 20 :-


// let remove_last =()  =>{
//     console.log(arr.pop());
//     console.log(arr);
// }

// remove_last();




// ANS N0 21:-

// let numbers = [40,20,30,100,120,222];
// let sum = 0;


// let Sum_number = () =>{
//     for(let i = 0 ; i < numbers.length ; i++){
//         sum = sum + numbers[i];
//     }
//     console.log(sum);
// }

// Sum_number();



// ANS N0 22:-

// let user = prompt("Enter any word or sentence:").toLowerCase();
// let count = 0;
// // let vowels = "aeiou";

// let get_string = () =>{
// for (let i = 0; i < user.length; i++) {
//     if (
//         user[i] === "a" || user[i] === "e" || user[i] === "i" || user[i] === "o" || user[i] === "u"
//     ) {
//         count++;
//     }
// }
// console.log(`total vowel = ${count}`);
// }

// get_string(user);



// ANS N0 23:-

// ans n0 01
// let remove_space = (word) =>{
//     return word.trim();
// }

// console.log(remove_space("fabiha      "))

// ans n0 02
// let user = prompt("enter your name").trim();

// let remove_space=()=>{
//     for(let i = 0 ; i < user.length ;i++){
//         console.log(i)
//     }
// }
// remove_space();


// ANS N0 24:-

// let present = (...word) => {
// for(let i =0 ; i < word.length ; i++){
// if(word[i] === "hello"){
//     alert("present!")
// }
// }
// }

// console.log(present("hello","baby","cat"))



// ANS N0 25:-









// ANS N0 27:-
// let user =prompt("enter the number");

// let reverse_string = () =>{
//     for(i = user.length-1 ; i >= 0 ; i--){
//         console.log(user[i]);
//     }
// }
// reverse_string();



//ans n0 28:-

// let number = +prompt("enter the number");

// let diivideby_03 = () =>{
//     if(number % 3 === 0){
//         console.log(`${number} is divisile by 03`)
//     }else{
//         console.log(`${number} is not divisile by 03`)
//     }
// }
// diivideby_03();



// ANS N0 29
// let user = prompt("type .......");
// let flag = false;

// let only_letter = () =>{
//     for(let i =0 ; i < user.length ; i++){
//         if(typeof user[i]=== "string" ){
//         flag = true;
//         }
//     }
//     if(flag === true){
//         for(let i = 0 ; i < user.length ; i++){
//             console.log(user[i])
//             document.write(user[i])
//             document.write("<br />")
//         }
//     }
// }

// only_letter();




//ANS N0 30 :-

// let user = prompt("what about yourself");
// let chnge = user.split(" ");

// let convert = () =>{
// console.log(chnge);
// }


// let convert = (sentence) => sentence.split(" ");

// console.log(convert("hello world fabiha"));






