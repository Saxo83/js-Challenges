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

// const pet = {
//     petName: "Snowy",
//     typeOfPet: "West Highland Terrier",
//     age: 17,
//     colour: "White",
//     good: true,
//     eatingDrinking: true,
//     petFeatures: ["small", "lazy", "happy"],
//     petEatingDrinking() { 
//         if (this.good == true && this.eatingDrinking == true) {
//             return (`Good ${pet.petName} gets their food and drink.`)
//         }
//         else if (this.good == false && this.eatingDrinking == true) {
//             return (`No that's a bad ${pet.petName}.`)
//         }
//         else {
//             return (`Who's a good ${pet.petName}?`)
//         }
//     }
    
// }
// console.log(`${pet.petName} is a ${pet.colour} ${pet.typeOfPet} and he is a ${pet.age} year(s) old.`)

// // change colour of pet ***********************************************************//////
// pet.colour = "Black"
// // console.log(pet)

// console.log(`Oh no ${pet.petName} is actually a ${pet.colour} ${pet.typeOfPet} and he is ${pet.age} year(s) old.`)

// // Pet activity add petFeatures that describe your pet**************************************///
// console.log(`He is ${pet.petFeatures}`)

// // Pet activity add methods eating and drinking******************************************************///

// console.log(pet.petEatingDrinking())


///////::::::::::::::::::: Coffee Shop Activity 5 ::::::::::::::::::::::::::::::::::::/

const coffeeShop = {
    branch: "Central",
    drinks: ["Coffee", "Tea", "Soft drink",],
    food:  ["Sandwich", "Cake", "Cookie",],
    prices: [5.00, 4.50, 4.00, 3.50, 3.00, 2.50,],
    drinkOrdered: true,
    foodOrdered: true,
    order() {
        if (this.drinkOrdered == true && this.foodOrdered == true){
            return (`You've ordered ${coffeeShop.drinks[0]} at £${coffeeShop.prices[0].toFixed(2)} and ${coffeeShop.food[1]} at £${coffeeShop.prices[2].toFixed(2)}. Your total comes to £${(coffeeShop.prices[0] + coffeeShop.prices[2]).toFixed(2)}. Thank you.`)
        }
        else if (this.drinkOrdered == true && this.foodOrdered == false){
            return (`You've ordered a ${coffeeShop.drinks[2]} at £${coffeeShop.prices[4].toFixed(2)}, would you like to order some food?`)
        }
        else if (this.drinkOrdered == false && this.foodOrdered == true){
            return(`You've ordered ${coffeeShop.food[2]} at £${coffeeShop.prices[5].toFixed(2)}. Would you like to order a drink?`)
        }
        else(this.drinkOrdered == false && this.foodOrdered == false);{
            return (`Welcome to ${coffeeShop.branch} Coffee Shop. What would you like to order?`)
        }
    }
}
console.log(coffeeShop.order())