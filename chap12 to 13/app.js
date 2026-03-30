    // " CHAP # 12 TO 13 "


   let code=prompt("Enter your character");
   let character = code.charCodeAt();

   console.log(code);
   
   if(code > 48 && code < 57){
    alert(`${code} is a number`);
}
else if (code > 65 && code < 90){
     alert(`${code} is a UPPERCASE`);
}
else if (code > 97 && code < 122 ){
     alert(`${code} is a LOWERCASE`);
}
else{
      alert(`${code} is a other character`);
}

//  ans no 2:

// let pm1=+prompt("Enter the first integer");
// let pm2=+prompt("Enter the 2nd integer");

// if(pm1>pm2){
//     alert("This value 1 is bigger ")
// }else if(pm1<pm2)
//     {
// alert("This value 2 is bigger ")
// }


// else{
//     alert("This is equal")
// }

//ans n0 03

// let num1=+prompt("Write the Number");

// if(num1>0){
//     alert("This is positive number")
// }else if(num1<0){
//     alert("This is negative number")
// }else{
//     alert("The value is 0")
// }
 //ans no 04:

// let char=prompt("Enter alphabte");
// if(char==="a"){
//     alert("This letter is vowel")
// }else if(char=="e"){
//         alert("This letter is vowel")

// }
// else if(char==="i"){
//         alert("This letter is vowel")

// }
// else if(char==="o"){
//         alert("This letter is vowel")

// }
// else if(char==="u"){
//         alert("This letter is vowel")

// }
// else{
//     alert("This is constant")
// }

//ans no 05:

// let user=prompt("Enter your 1st password");
// let user2=prompt("Enter your 2nd password");

// if(user,user2===""){
//     alert("Please fill all fields")
// }else if(user!==user2){
//     alert("Please enter correct password")
// }else{
//     alert("CORRECT!");
// }


// ans n0 06:
// let hour= 14;
// if(hour < 18){
// alert("good day");
// }
// else(
//     alert("good evening")
// )

//ans no 07:-

// let time = +prompt("enter your time ....whatever you want to know ");

// if(time < 1200){
// alert("MORNING")
// }
//  else if(time > 1200 && time < 1700 ){
//    alert("AFTER NOON")
//  }
//  else if ( time > 1700 &&  time < 2100){
// alert("EVENING")
//  }
//  else{
//   alert("NIGHT")
//  }
