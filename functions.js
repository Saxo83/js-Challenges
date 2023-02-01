// const holidayDestination = () => {
//     console.log("Yay! I'm going on holiday!")
// }
// holidayDestination()

// const sayHello = () => {
//     console.log("Hi there, how are you?")
// }
// sayHello()



// const holidayDestination = (country, month) => {
//     console.log(`Yay! I'm going on holiday to ${country} in ${month}. I can't wait!`)
// }
// holidayDestination("the French Alps", "February")

// const sayHello = (myName, drink) => {
//     console.log(`Hi my name is ${myName} and my favourite drink is ${drink}.`)
// }
// sayHello("Kathryn", "water")

// const multiply = (num1, num2) => {
//     return num1 * num2
// }
// console.log(multiply (2,5))


///****************************** Function of a function************************************************/

// 3 ways to write functions

// // Arrow functions
// // Anonymous, function stored as a variable

// const addMe =  (num1, num2) => {
//     return num1 + num2
// }

// addMe(4,5)

// // Declaration functions
// // NOT anonymous, function stored as a function, not a variable

// function addMe(num1, num2) {
//     return num1 + num2
// }

// addMe(4,5)

// // Expression functions
// // Anonymous, function stored as a variable

// const addMe = function(num1, num2) {
//     return num1 + num2
// }

// addMe(4,5)


// ////********************* Examples ******************************************////////////


// /////**** ALisha's Examples ********/

// // ----- Return Example -----
// const multiply = (num1, num2) =>
// {
//     return num1 * num2;
// }
// console.log(multiply(2,5));
// console.log();

// // ----- Decleration Function Example -----
// function addMe(num1, num2)
// {
//     return num1 + num2;
// }
// console.log(addMe(4,5));
// console.log()

// // ----- Expression/Anonymous Function Example -----
// const addMe2 = function(num1, num2)
// {
//     return num1 + num2;
// }
// console.log(addMe2(12,23));
// console.log()


/////////::::::::::::: Activity 1 :::::::::////////////////

// const helloCodeNation = () => {
    
//     console.log("Hello Code Nation")
// }

// const fiveTimes = (num, fn) => {
//     for (let i = 0; i < 5; i++) {
//         fn()
//     }
// }
// fiveTimes(5,helloCodeNation)


// helloCodeNation()

///////******* Jake's example ********************////////////
// // function to log something
// const sayHello = () => {
//     console.log("hello from code nation")
// }

// // function which takes another func as a parameter
// const speak = (loopNum, fn) => {
//     for(let i=0; i<loopNum;i++)
//     {
//         fn(); // the call to the other function
//     }
// }
// speak(5,sayHello);
//
/////////************ Daniel's Example **************///////////
// const simpFunc = () => {
//     console.log("Hello Code Nation")
// }

// const multiFunk = (num, func) => {
//     let x = 0
//     while (x < num) {
//         func()
//         x ++
//     }

// }

// multiFunk(5, simpFunc)



////////////::::::::::: Activity 2 ::::::::::://////////////

// let nums = [1,2,3,4,5,]
// console.log(nums)

// console.log(nums.map[1])