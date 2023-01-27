// const person = {
//     firstName: "Sally",
//     lastName: "Evans",
//     age: 27,
//     occupation: "Sales assistant",
//     married: false,
//     homeOwner: false
// }

// Object.defineProperty
// person.firstName
// console.log(person.firstName)
// console.log(person["firstName"])
/*******************************************************************/
// const person = {
//     firstName: "Sally",
//     lastName: "Evans",
//     age: 27,
//     occupation: "Sales assistant",
//     married: false,
//     homeOwner: false,
//     hobbies: ["tennis", "gardening", "bungee jumping"],
//     marketingOp () {
//         if (this.homeOwner == false && this.age > 25) {
//             return "Send mortgage offer email."
//         }
//         else if (this.homeOwner == false && this.age < 25){
//             return "send summer holiday fun credit card offer"
//         }
//         else if (this.homeOwner == true && this .age < 25) {
//             return "Pension investment offer."
//         }
//         else {
//             return "Send sensible Savings offer."
//         }
//        }
// }

// console.log(person.marketingOp())

//////*******Example 1 ***************************/

// const pet = {
//     petName: "Snowy",
//     typeOfPet: "West Highland Terrier",
//     age: 17,
//     colour: "White"
// }

// console.log(`${pet.petName} is a ${pet.colour} ${pet.typeOfPet} and he is a ${pet.age} year(s) old.`)

// Pet activity change colour///*******************************************************************/

const pet = {
    petName: "Snowy",
    typeOfPet: "West Highland Terrier",
    age: 17,
    colour: "White",
    good: true,
    eatingDrinking: true,
    petFeatures: ["small", "lazy", "happy"]
}
console.log(`${pet.petName} is a ${pet.colour} ${pet.typeOfPet} and he is a ${pet.age} year(s) old.`)

colour = "Black"
console.log(`Oh no ${pet.petName} is actually a ${colour} ${pet.typeOfPet} and he is ${pet.age} year(s) old.`)

// Pet activity add petFeatures that describe your pet**************************************///
console.log(`He is ${pet.petFeatures}`)

// Pet activity add methods eating and drinking******************************************************///

eatingDrinking() {
    if (this.good == true && this.eatingDrinking == true) {
        return "Good boys gets his food and drink."
    }
    else if (this.good == false && this.eatingDrinking == true) {
        return "No that's a bad boy."
    }
    else {
        return "Who's a good boy?"
    }
}
console.log(pet.eatingDrinking())


// echo "# js-Challenges" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Saxo83/js-Challenges.git
// git push -u origin main