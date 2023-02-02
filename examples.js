// write code here *commenting out with ctrl and /

// console.log("Hello World"); // prints Hello World

// console.log("Hello World".length); //prints the length of the string as a number in yellow

// console.log("11"); //prints the number 11 as a string

// console.log("Hello, what is your name?".length); //prints the length of the string as a number in yellow

// console.log("Hello World".toLowerCase()); // .toLowerCase will make all letters in a string lower case

// console.log("Hello World".toUpperCase()); // .toUpperCase will make all letters in a string upper case

// console.log("     . Hello World   .    ".trim()); // Removes the leading and trailing white space and line terminator characters from a string.

// console.log(true); // Boolean and makes it true
// console.log(false); // Boolean and makes it false


// let firstName = "Kathryn"
// let age = 39
// let universityStudent = false

// console.log("My name is",firstName, "and I'm",age, "years old. I'm a University Student?",universityStudent);

// let modelOfCar = "Volvo";
// let firstName = "Kathryn";
// let occupation = "don't work."

// console.log(`Hi, my name is ${firstName}. I don't drive a ${modelOfCar} beacuse I ${occupation}`)


/////////////////***********************Activity 2 *****************//////////////////////////////
// let firstName = "KaThRyN";
// let age = "39";
// let colour = "blue";

// console.log(`Hi, my name is ${firstName}, I am ${age} years old and my favourite colour is ${colour}.`)



// console.log("Kathryn".substring(5,0));

// console.log(firstName.charAt(0).toUpperCase() + firstName.slice(1,firstName.length).toLowerCase())
// console.log(`Hi, my name is ${firstName.charAt(0).toUpperCase() + firstName.slice(1,firstName.length).toLowerCase()}, and I am ${age}.`)

// console.log("Kathryn".padStart(5,"?"));



//////////////////////**************************** Activity 3 ************/////////////////////////////

// let day = []
// let breakfast = "Nothing"
// let lunch = "Sandwich"
// let dinner = "Steak"

// console.log(`Today I had ${breakfast.toLowerCase()} for breakfast, I ate a ${lunch.toLowerCase()} for my lunch and I had ${dinner.toLowerCase()} for my dinner.`)

//////////////******************** Activity 4 *************////////////////////////
// let today = Date()
// console.log(Date())
// let birthday = new Date("2023-08-14T00:00:01")
// console.log(new Date())
// // let daysTo = today - birthday
// // console.log(daysTo)

// console.log(`Todays date: ${today} and my birthday: ${birthday}. There are 193`)

// console.log(Date().toString())

// console.log(`The number of days to ${birthday} from ${today} is ${birthday - today} days.`)

today=new Date();
const birthday=new Date(today.getFullYear(), 7, 14);
if (today.getMonth()==2 && today.getDate()>2) 
{
birthday.setFullYear(birthday.getFullYear()+1); 
}  
const one_day=1000*60*60*24;
console.log(`${Math.ceil((birthday.getTime()-today.getTime())/(one_day))} days until my birthday!`);

////////****************** example online **************/////////////////////
// today=new Date();
// const cmas=new Date(today.getFullYear(), 11, 25);
// if (today.getMonth()==11 && today.getDate()>25) 
// {
// cmas.setFullYear(cmas.getFullYear()+1); 
// }  
// const one_day=1000*60*60*24;
// console.log(`${Math.ceil((cmas.getTime()-today.getTime())/(one_day))} days left until Christmas!`);
