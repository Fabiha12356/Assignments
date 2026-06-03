// CHAP NO 21 TO 25

// let user1 = prompt("enter your 1st name");
// let user2 = prompt("enter your last name");

// let fullName = user1 + user2 ;

// document.write(` Assalam o Alaikum ${fullName} !`)


document.write("<br />");
// ANS N0 02


// let user3 =prompt("Which mobile do you like most");

// document.write(`My favourite mobile is ${user3}`);
// document.write("<br />");
// document.write(`My mobile length of ${user3.length}`);


document.write("<br />");
// ANS N0 03
// let world = "Turkey".toLowerCase();

// document.write(` First index of K ${world.indexOf("k")}`);


document.write("<br />");
// ANS N0 04
// let greet = "hello world";

// document.write(`Last index of L ${greet.lastIndexOf("l")}`);


document.write("<br />");
    // ANS N0 05
    let country = "pakistani";
    document.write(`character at the index 3 = ${country.charAt(3)}`);


document.write("<br />");
    // ANS N0 06
let city = "Hyderabad" .toLowerCase();

document.write(`After Replacement ${city.replace ("hyder", "Islam")}`);



document.write("<br />");
    // ANS N0 07
let text = "Ali and sara are best friends . they play cricket and football together";
document.write(` ${text.replaceAll("and" ,"&")}`);


// ANS N0 08
// ANS N0 09



document.write("<br />");
// ANS N0 10:-

// let user6 = prompt("Enter dry fruits").toUpperCase();
// document.write(user6);



document.write("<br />");
// ANS N0 11:-

// let user7 = prompt("tell me about your language");
// document.write(`${user7[0].toUpperCase()}${user7.slice(1).toLowerCase()}`);


document.write("<br />");
// ANS N0 12:-
let number = 35.36;


document.write(`NUMBER : ${number}`);
document.write("<br />")
document.write(`RESULT : ${number.toString().replace("." , "")}`);


document.write("<br />");
// ANS N0 12:-
let user8 = prompt("Type your UserName");

if(user8 == "@" || user8 == "!" || user8 == "."){
    alert("valid username");
}