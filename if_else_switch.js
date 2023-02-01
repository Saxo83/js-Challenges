//example 1
// let hunger = "hungry"

// if (hunger == "hungry") {
//     console.log("Yes please, I'm starving!")
// }
// else if (hunger == "full") {
//     console.log("No thanks, I'm stuffed!")
// }
// else{
//     console.log("Oh go on then, why not!")
// }

//********************** Music Activity *********************//// 
// let music = "trance"

// if (music == "classical") {
//     console.log("Oh, how realxing.")
// }
// else if (music == "disco") {
//     console.log("Where are my danig shoes?!")
// }
// else{
//     console.log("Where's the party?!")
// }

//////


// //example of equals
// if (4 === "4") {
//     console.log(true)
// }
// else{
//     console.log(false)
// }

// if (4 === 4) {
//     console.log(true)
// }
// else{
//     console.log(false)
// }

// if (4 == "4") {
//     console.log(true)
// }
// else{
//     console.log(false)
// }

// if (4 != "4") {
//     console.log(true)
// }
// else{
//     console.log(false)
// }

// if (4 != 4) {
//     console.log(true)
// }
// else{
//     console.log(false)
// }


//******************** Age Activity **********************///
// let age = 39

// if (age >= 17) {
//     console.log("I can serve you.")
// }
// else{
//     console.log("Get lost kid!")
// }

//////

///////////////////////////////
// let food = "ice cream"
// let hunger = "hungry"

// if (hunger == "full" && food == "ice cream") {
//     console.log("Of course, who wouldn't.")
// }
// else if (hunger == "hungry" && food == "ice cream") {
//     console.log("Yes please I'm starving, could I also have a pizza.")
// }
// else if (hunger == "hungry" && food == "sprouts") {
//     console.log("Actually, I can't.")
// }
// else{
//     console.log("No thanks, I'm stuffed.")
// }

//************* Age and Country Activity ************************////

///age and country
// let age = 16
// let country = "UK"

// if (age >= 17 && country == "UK") {
//     console.log("I can serve you.")
// }
// else if( age >=21 && country == "USA")
//     console.log("Welcome to America! USA!")
// else{
//     console.log("Get lost kid!")
// }


//////

// let food = "pizza"

// if (food == "ice cream" || food == "pizza") {
//     console.log("Yay, Let's eat!")
// }
// else if (food == "sprouts" || food == "brocoli") {
//     console.log("Ugh, no thanks")
// }
// else{
//     console.log("Okay, go on then why not.")
// }


//*************** Alarm activity **************************///


// let day = "Saturday"

// if (day == "Saturday" || day == "Sunday")
// {
//     console.log("Yay, it's the weekend!")
// }
// else
// {
//     console.log("Oh no, work again!")
// }
// 

//////////

// let food = "sprouts"

// switch(food) {
//     case "ice cream":
//     case "pizza":
//         console.log("Yay, let's eat")
//         break
//     case "sprouts":
//     case "broccoli":
//         console.log("Ugh, no thanks!")
//         break
//     default:
//         console.log("Okay. Go on then, why not.")
// }

//************ Activity 4  *******************************////////

// let pizzaTopping = "Pineapple"

// switch(pizzaTopping) {
//     case "Pepperoni":
//     case "Jalepenos":
//         console.log("These are important ingrefients for my pizza!")
//         break
//     case "Onions":
//     case "Peppers":
//         console.log(`I don't mind having ${pizzaTopping} on my pizza.`)
//         break
//     default:
//         console.log(`${pizzaTopping}, should not be on a pizza!`)
// }

//********** Activity 5 *************************************/////

// let password = "Password1"

// console.log(password.length);

// if (password == "Password" && password.length == 8) {
//     console.log("Password is correct.")
// }
// else (password != "Password" || password.length != 8){
//     console.log("Incorrect! Your password is not the correct length.")
// }


//********************* Activity 6 *****************************/////////

// let num = 30

// if (num % 15 == 0) {
//     console.log("FIzz Buzz!");
// }
// else if (num % 3 ==0) {
//     console.log("Fizz!");
// }
// else if (num % 5 == 0) {
//     console.log("Buzz!");
// }
// else {
//     (console.log(num));
// }
//Example from W3schools ////
// for (var i = 1; i < 101; i++) {
//     if (i % 15 == 0) console.log("FizzBuzz");
//     else if (i % 3 == 0) console.log("Fizz");
//     else if (i % 5 == 0) console.log("Buzz");
//     else console.log(i);
// }


//***********************Activity 7 ****************************/

// let placeOfWork = "Work"
// let townOgHome = "Home"
// let time =  7

// if (time < 8) {
//     console.log("I'm at home.")
// }
// else if(time == 8) {
//     console.log("Commuting")
// }
// else if (time >=9) {
//     console.log("Ugh, work!")
// }
// else {
//     (console.log(time))
// }


//****************************** ACtivity 8 **************************/

// let letters = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"

// console.log (letters.lastIndexOf())

//****************************** ACtivity 9 **************************/

// *****************example from Alisha ************/////////////////////
// let word = "this string compares if the last letter is the same as the first";
// let start = word.charAt(0);
// let end = word.charAt(word.length-1);

// console.log("The first letter is the same as the last:");

// if (start == end)
// {
//     console.log(true);
// }
// else
// {
//     console.log(false);
// }



//****************************** ACtivity 10 **************************/


///////////*********** example from Alisha ***********////////////////
// num = "1983";

// console.log(`${num} backwards is ${num.charAt(3)}${num.charAt(2)}${num.charAt(1)}${num.charAt(0)}`)

// if (num.charAt(0) == num.charAt(3) && num.charAt(1) == num.charAt(2))
// {
//     console.log(num, "is a palindrome!")
// }
// else
// {
//     console.log(num, "is not a palindrome.")
// }