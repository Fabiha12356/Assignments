//CHAP NO 14 TO 16:-


// ANS NO 01:-

// let studentName=["altamash" ,"warda", "irha" , "Ayeza" , "Ayat fatima"];

// console.log(studentName);

//ANS NO 02:-


// let studentName2=[
//     { name :"fabiha"} , 
//     { name :"fabiha"} , 
//     { name :"hamna"} , 
//     { name :"hamna"} , 
   
// ]

// console.log(studentName2);


//ANS N0 03:-

// let STRING=["fabiha" ,"hamna", "fabiha" , "hamna" , "fabiha" , "hamna"];

// console.log(STRING);


//ANS N0 04:-

// let number =[ 1, 2 ,3 ,4 ,5 ,6, 7 ,8];
//  console.log(number);


 //ANS N0 05:-
// let boolean =[ true , false , true , false , true];
// console.log(boolean);


// ANS N0 06:-

// let mix=["fabiha" , 20 , "october" , true];
// console.log(mix);

// ANS N0 07:-
// let education=["SSC" ,"HSC" , "BSC" ,"BS" , "BCOME" , "MS" , "M.PHIL" , "PHD"];
// document.write("Qualifications");
// document.write("<br/>");
// document.write(education.join("<br>"));

//ANS N0 08:-
document.write("<br/>");
let program=["hussain" , "fabiha" , "hamna"];
let num=[320 , 230 , 480];
let PERCNT=["64%","46%","96%" ];

document.write( `Score of ${(program[1])}  is ${(num[0])} . Percentage : ${(PERCNT[0])}` );
document.write("<br />")
document.write( `Score of ${(program[2])}  is ${(num[1])} . Percentage : ${(PERCNT[1])}` );
document.write("<br />")
document.write( `Score of ${(program[0])}  is ${(num[2])} . Percentage : ${(PERCNT[2])}` );
// ANS N0 09:-

let names=[120,240,210,230];
console.log(names[0],names[2],names[3],names[1]);


// ANS N0 10:-
document.write("<br />")
let city = ["karachi" , "quetta" , "peshawar" , "Islamabad" , "lahore"];
document.write(city.slice(0,3));

// ANS N0 12:-

let arr=["this" , "is" , "my" , "cat"];
console.log(arr);

//ANS N0 13:-
document.write("<br />")
let Equip=["keyboard" , "mouse" , "Pc" , "calculator"];
document.write(Equip.shift());
document.write("<br />")
document.write(Equip);
document.write("<br />")
document.write(Equip.shift());
document.write("<br />")
document.write(Equip);
document.write("<br />")
document.write(Equip.shift());
document.write("<br />")
document.write(Equip);


//ANS N0 14:-
document.write("<br />")
let vehicle=["BMW" , "TESLA" , "CIVICS" , "MERSDEES"];
document.write(vehicle);
// document.write(Equip.shift());
// document.write("<br />")
// document.write(Equip);
// document.write("<br />")
// document.write(Equip.shift());
// document.write("<br />")
// document.write(Equip);
// document.write("<br />")
// document.write(Equip.shift());
// document.write("<br />")
// document.write(Equip);
document.write("<br />")
document.write(vehicle.pop());
document.write("<br />")
document.write(vehicle);
document.write("<br />")
document.write(vehicle.pop());
document.write("<br />")
document.write(vehicle);
document.write("<br />")
document.write(vehicle.pop());
document.write("<br />")
document.write(vehicle);


document.write("<br />")
//ANS N0 15:-
let color=["red" ,"green" ,"purple" ,"orange" ,"black" ,"yellow"];
document.write( `Original-Color : ${color}`);

//a:-
let user=prompt("type fvrt colorname");
color.unshift(user);
document.write("<br />")
document.write(`Updated-Color : ${color}`);

//c
color.unshift("Gray" , "Peach")
document.write("<br />")
document.write(`Two-Color-ADD : ${color}`);

//d:-
color.shift()
document.write("<br />");
document.write(`Delete 1st : ${color}`);

//e:-
color.pop();
document.write("<br />");
document.write(`Delete Last : ${color}`);

//f:-
let add= prompt("enter your desired Color")
color.unshift(add);
document.write("<br />");
document.write(`Updated-color : ${color}`);


//G:-
let index = +prompt("type index no you want to delte form")
let count= +prompt("enter that Color you want to remove");
color.splice(index,count);
document.write("<br />");
document.write(`Updated-color : ${color}`);