// ANS N0 01 :-


// function Itemarray(){

// }



let  itemarray=[
    {name: "jucie" ,prices : 50 , quantity : 3},
   { name:"cookie",prices : 60 , quantity : 5},
    {name:"shirt",prices : 850 , quantity : 1},
    {name:"pen",prices : 250 , quantity : 2,}

];

console.log(itemarray);


// METHID 1ST:-
let first1= itemarray[0].prices; 
let first2= itemarray[1].prices; 
let first3= itemarray[2].prices; 
let first4= itemarray[3].prices; 

//total calulation:-
let sum = first1*itemarray[0].quantity+first2*itemarray[1].quantity+first3*itemarray[2].quantity+first4*itemarray[3].quantity;
console.log(sum)


//only prise:-
// let sum1 = first1.prices+ first2.prices+first3.prices+first14.prices;
// console.log(sum1);

// //METHO 02 :-
// only prize
// let total = itemarray[0].prices+ itemarray[1].prices+itemarray[2].prices+itemarray[3].prices;
// console.log(total)



// ANS N0 02

let personalinfo = {
    name : "fabiha",
    father_name : "sohail",
   email : "fabihasohail@gmail.com",
   age : 17,
   password : "qulfi804",
}

console.log("email" in personalinfo);
console.log("password" in personalinfo);
console.log("name" in personalinfo);
console.log("father_name" in personalinfo);
console.log(personalinfo.hasOwnProperty("name"));
console.log(personalinfo.hasOwnProperty("age"));



//ANS N0 03 :-

function Records(firstname,lastname,education){
    this.name=firstname;
    this.fathername=lastname;
    this.class=education;
}

 console.log(new Records("fabiha","sohail",11))

 console.log(new Records("areeba","sajjad",11))

 console.log(new Records("rifza","kamran",11))
