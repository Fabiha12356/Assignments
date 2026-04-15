//CHAP 17 TO 20 :-


// ansn0 01:-

let matrix = [
    [1, 2 ,3],
    [4, 5 ,6],
    [7, 8 , 10]
];
document.write(`${(matrix[0][0])}   ${(matrix[1][0])}  ${(matrix[2][0])}`)
document.write("<br />");
document.write(`${(matrix[1][1])}   ${(matrix[0][1])}  ${(matrix[2][1])}`)
document.write("<br />");
document.write(`${(matrix[1][2])}   ${(matrix[2][0])}  ${(matrix[0][2])}`)
document.write("<br />");


// ans n0 02:-

for(let i = 1 ; i <= 10;  i++){
document.write(i);
document.write("<br />")
}


//ans n0 03:-
//part 01:-
let num1 = +prompt("enter the num");
let length = +prompt("enter the length");

document.write(` Multiplication table of ${num1} <br>`)
document.write(` length of ${length} <br>`)

for(let i =0 ; i <= length ; i++){
    document.write(`${num1} x ${i} = ${num1 *i} <br>`);
}

//part 02:-
// let num = +prompt("enter the num");

// for(let i =0 ; i <= num ; i++){
//     document.write(`${num} x ${i} = ${num *i} <br>`);
// }


//ans n0 04:-

let fruits = ["apple","mango" , "banana" , "orange" , "grapes"];

document.write(fruits.join("<br>"));
document.write(` element of index 0 is ${fruits[0]} <br>`);
document.write(` element of index 1 is ${fruits[1]} <br>`);
document.write(` element of index 2 is ${fruits[2]} <br>`);
document.write(` element of index 3 is ${fruits[3]} <br>`);
document.write(` element of index 4 is ${fruits[4]} <br>`);


//ans n0 05 :-
document.write( `Counting <br>`)
for (let i = 1 ; i <= 15; i++){
    document.write(`${i} , `)
}

document.write("<br />")

//b:-
document.write("Reverse - Counting")

document.write("<br />")
for (let j = 15 ; j >=1 ; j--){
    document.write(` ${j} ,`)
}

//c:-
document.write("<br />")
document.write( `even NO <br>`)
for(let k = 1 ; k <= 10 ; k++){
    if(k%2 ===0){
document.write( ` ${k} ,`);
    }
}

//d
document.write("<br />")
document.write( `odd NO <br>`)
for (let l = 0 ; l <=10 ; l++){
    if(l%2 === 1){
document.write(` ${l} ,`);
    }
}

//e:-
document.write("<br />")
document.write( `Series <br>`)
for (let M = 0 ; M <=15 ; M++){
    if(M%2 === 0){
document.write(`${M}K , `);
    }
}


// ans n0 06:-
// let order =prompt(" Enter ! what do you want ")

// let sweets = ["cookie" , "cake" ,"icecream" , "lava-cake" ,"pastery"];

// if(sweets.includes(order.toLowerCase())){
//     alert("yes i have");
// }
// else{
//     alert("sorry");
// }

document.write("<br />")
//ans n0 07:-
let largerNo = [27,90,100,105,550,800,28];
document.write( `The largestNo is ${(largerNo[4])}`);
document.write("<br />")

//ans n0 08:-
let smallNo =[78,97,47,57,10,9,29];
document.write( `The smallNo is ${(smallNo[6])}`)
document.write("<br />")



//ans n0 09:-
document.write(`Multiples By 5`)
document.write("<br />")
for (let i = 0 ; i <= 100 ; i++){
    if(i % 5 == 0){
        document.write(i)
         document.write(" <br />")
    }
}