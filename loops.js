// let favHolDest = [
//     "Venice, Italy",
//     "Paris, France",
//     "Barcelona, Spain"
// ]
// for (let i = 0; i < favHolDest.length; i++) {
//     console.log(favHolDest[i])
// }
// // for (initialExpression; condition; increment/decrementExpression)

// favHolDest.unshift("Phuket, Thailand", "St.Anton, Austria")

// console.log(favHolDest)


// for (let i = 0; i <=10; i++) {
//     console.log(i += 2)
// }
// ///******************* even numbers between 0 and 20 *********************/
// let evenNumbers = []
// for (let n = 0; n < 20; n++) {
//     if (n % 2 == 0) {
//         (evenNumbers.push(n))
//     }
// }
// console.log(`The even numbers between 0 and 20 are; ${evenNumbers}`)

// ///********************* reverse order **************************/////
// evenNumbers.reverse()
// console.log(`The even numbers in reverse order between 0 and 20 are; ${evenNumbers}`)

// ////************************** odd numbers between 0 and 30 ***************/
let oddNumbers = []
for (let n = 0; n < 30; n++) {
    if (n % 2 !== 0) {
        (oddNumbers.push(n))
    }
}
console.log(`The odd numbers between 0 and 20 are; ${oddNumbers}`)
oddNumbers.reverse()
console.log(`The odd numbers in reverse order between 0 and 30 are; ${oddNumbers}`)

// let lives = 3
// while (lives > 0) {
//     console.log("Well done! You're still in the game.");
//     lives--
// }
// console.log("Game Over!!!")

// let currentDiceRoll = 5
// while(currentDiceRoll != 1) {
//     console.log(currentDiceRoll)
//     currentDiceRoll = Math.floor(Math.random()*6)+1
// }
// console.log(currentDiceRoll)

// let age = []

//     while(age < 18) {
//         // for (let n = 1; n <= 30; n++){
//         //     age.push(n)
//         console.log("You're a Child.")
//         for (age > 30); {
//             console.log("You're an Adult")
//         }
//     // }
// }
// // console.log(`Age:" ${age}`)


// ///********************* Activity 3 ***********************/
// let age = [1]
// for (age = 0; age <= 30; age +=1)
// while (age < 30) {
//     if (age < 18){
//         console.log(`${age}, you're an child.`);
//         break
//     }
//     else (age > 18);{
//         console.log(`${age}, you're a adult.`)
//         break
//     }
// }    

//////// Philp's code **********/////////////////////////
// let age = 1
// while(age < 21) {
//     age++;
//     if (age < 18) {
//         console.log("You're a child")
//     } else {
//         console.log("You're an adult")
//     }
// }

/****************** Activity 4 *************************/


// for (let n = 0; n < 6; n++) {
    
//     console.log(Math.floor(Math.random()*100))
//         }


/****************** Activity 5 *************************/
// let favFilms = [
//     "Home Alone",
//     "Back to the Future",
//     "Shawshank Redemption",
//     "T2"
// ]
// console.log(favFilms)

// for (let i = 0; i < favFilms.length; i++) {
//     console.log(favFilms[i])
// }

// if (favFilms[2] == "Ghostbusters"){
//         console.log("Yay! It's Ghostbusters!")
//     }
// else {
//         console.log("Boo! We want Ghostbusters!")
//     }




/****************** Activity 6 *************************/
    // Generate a random number between 1 and 30 six times. For each
    // random number generated, check if this number is divisible by 7 or
    // not. Log out a message to the console if it is divisible by 7 or not.
// let numDiv7 = []
// for (let n = 0; n < 6; n++)
// {    
//     x = Math.floor(Math.random()*30)
//     {
//     if (x % 7 == 0)
//         {
//         (numDiv7.push(x))
//         console.log(`${x} is divisible by 7.`)
//         }
//     else {
//         console.log(`${x} is not divisible by 7.`)
//     } 
//     }
// }
// console.log(`The numbers between 0 and 30 that are divisible by 7 are; ${numDiv7}`)


// let evenNumbers = []
// for (let n = 0; n < 20; n++) {
//     if (n % 2 == 0) {
//         (evenNumbers.push(n))
//     }
// }
// console.log(`The even numbers between 0 and 20 are; ${evenNumbers}`)


/****************** Activity 7 *************************/

// let sameFollowers = []

// let bobsFollowers = [
//     "Josephine",
//     "Kate",
//     "Laura",
//     "Michael"
// ]
// let hannahsFollowers = [
//     "Kate",
//     "Lee",
//     "Michael",
//     "Nancy"
// ]
// for (let b = 0; b < bobsFollowers.length; b++){
//     for (let h = 0; h < hannahsFollowers.length; h++){
//         if (bobsFollowers[b] === hannahsFollowers[h]){
//         console.log(sameFollowers = hannahsFollowers)
//         }
//     }
// }

/////// Cristina's Code *************////////////////////
// let equalFollowers = [];
// let aFollowers = [
//     "Abigail",
//     "Joseph",
//     "Jacob",
//     "Noah"
// ];
// let bFollowers = [
//     "Lillian",
//     "Lazarus",
//     "Noah",
//     "Jacob"
// ];
// for (let i = 0; i < aFollowers.length; i++) {
//     for (let j = 0; j < bFollowers.length; j++) {
//         if (aFollowers[i] === bFollowers[j]) {
//             console.log(equalFollowers = aFollowers[i])
//         }
//     }
// };