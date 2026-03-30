  //CHAP NO 09 :-

  //ANS NO 01:-
document.write("Result :-");
 let a= 10;
 document.write("<br/> ")
 document.write(`The value of a is : ${a}`);
++a;
 document.write("<br/> ")
document.write(` The value of a is : ${a}`);
a++;
 document.write("<br/> ")
document.write(` The value of a is : ${a}`);


 document.write("<br/> ")
 --a;
document.write(` The value of a is : ${a}`);

a--;
 document.write("<br/> ")
document.write(` The value of a is : ${a}`);




//ans n0 02 :-
document.write("<br/> ")
document.write("ANS NO 02 :- ");
let b,c,result;
b=3;
c=5;
result= --b - --c + ++b + b-- ;

 
console.log(--b);
console.log(--c);
console.log(--b - --c);
console.log(++b);
console.log(--b - --c + ++b);


document.write("<br/> ")
document.write(`${b}`);

document.write("<br/> ")
document.write(`${c}`);

document.write("<br/> ")
document.write(result);




//ans no 03:-

// let user = prompt("enter your name");
// console.log(`  hello ${user} `);


// ans 4 and 5 :-
// document.write("<br/> ")
// let num = prompt("Enter a number:");

// if(num === ""){
//   num = 5;
// }

// document.write(` ${num} x 1 =  ${num * 1} <br>`)
// document.write(` ${num} x 2 =  ${num * 2} <br>`)
// document.write(` ${num} x 3 =  ${num * 3} <br>`)
// document.write(` ${num} x 4 =  ${num * 4} <br>`)
// document.write(` ${num} x 5 =  ${num * 5} <br>`)
// document.write(` ${num} x 6 =  ${num * 6} <br>`)
// document.write(` ${num} x 7 =  ${num * 7} <br>`)
// document.write(` ${num} x 8 =  ${num * 8} <br>`)
// document.write(` ${num} x 9 =  ${num * 9} <br>`)
// document.write(` ${num} x 10 =  ${num * 10} <br>`)

//ans n0 6 and 7;
document.write("<br/> ")

// let subjectName = prompt("type your subject");
// let totalMarks = +prompt("obtain marks");
// let obtainMarks = 100;
// document.write(` subject            obtain-marks             total-marks                percentages`);

// if(subjectName ===""){
//   subjectName = "MATH";  
// }
// if (totalMarks ===0){
//   totalMarks = 100;
// }

// document.write("<br/> ")
// document.write(` ${subjectName}    ${obtainMarks}    ${totalMarks}    ${ (obtainMarks / totalMarks) * 100 }% `);


let sub1 = prompt("type your subject");
let sub2 = prompt("type your subject");
let sub3 = prompt("type your subject");


let obtainNO= 100;
 let totalNo = +prompt("enter your totalNO");



 if(totalNo ===0){
  totalNo = 100;
}
if(sub1 ===""){
  sub1 = "English";  
}
if(sub2 ===""){
  sub2 = "Urdu";
}
if(sub3 ===""){
  sub3 = "Math";
}


 document.write(` ${sub1} ${totalNo} ${obtainNO} ${(obtainNO / totalNo) * 100} %`);
 document.write(" <br/ >");
 document.write(` ${sub2} ${totalNo} ${obtainNO} ${(obtainNO / totalNo) * 100} %`);
 document.write(" <br/ >");
 document.write(` ${sub3} ${totalNo} ${obtainNO} ${(obtainNO / totalNo) * 100} %`);











