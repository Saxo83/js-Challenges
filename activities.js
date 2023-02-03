// You can run this program in the terminal with      node activities.js
// Develop an algorithm which will log different 
// statements depending on the value of a variable

// Declare a variable and assign to it any number you wish

// Fill in the rest of this if statement structure 
// Output
// "Fizz" if the number is divisible by 3
// "Buzz" if the number is divisible by 6
// "Fizz Buzz" if the number is divisible by both 3 and 5
// "No Fizz and No Buzz" otherwise

const fizzBuzz = (num) => {

    if (num % 3 == 0 && num % 5 == 0){
        console.log(`${num}:Fizz Buzz!`)
    } 
    else if (num % 3 == 0){
        console.log(`${num}:Fizz!`)
    } 
    else if (num % 6 == 0){
        console.log(`${num}:Buzz!`)
    }
    else{
        console.log(`${num}:No Fizz and No Buzz!`)
    }
}
fizzBuzz(30)


// Run the program, and as an example
// use the number 6 to output Fizz
// 10 to output Buzz
// 15 to output Fizz Buzz
// 17 to output No Fizz and No Buzz
// You can of course try as many other numbers as you wish