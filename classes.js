class Pet {
    constructor(name, age, type, breed, colour, time){
        this.name = name;
        this.age = age;
        this.type = type;
        this.breed = breed;
        this.colour = colour;
        this.lastFed = time;
    }
    feedPet (time){
        this.lastFed = time;
        return `Last feed updated to: ${this.lastFed} for ${this.name}`;

    }
}
class PetMeds extends Pet {
    constructor(name, age, type, breed, colour, time, mtime){
        super(name, age, type, breed, colour, time);
        this.lastMeds = mtime;
    }
    giveMeds (time){
        this.lastMeds = time;
        return `Last meds updated to: ${this.lastMeds} for ${this.name}`;
    }
}
const Snowy = new Pet("Snowy", 17, "Dog", "Westie", "White", "13:00")
console.log(Snowy.feedPet("17:00"))
console.log(Snowy)

const Beppo = new PetMeds("Beppo", 14, "Dog", "Yorkshire Terrier", "Black & Brown", "10:00", "12:00")
console.log(Beppo.feedPet("13:00"))
console.log(Beppo)

const FluffyJean = new Pet("FluffyJean", 4, "Cat", "Moggies", "Black & White", "11:00")
console.log(FluffyJean.feedPet("14:00"))
console.log(FluffyJean)

const Hammond = new PetMeds("Hammond", 2, "Hamster", "Syrian", "Brown & White", "09:00", "16:00")
console.log(Hammond.feedPet("11:00"))
console.log(Hammond)

////////// Jenny's Student Example ********************************************///////////////////////////////////
// class Student {
//     constructor(firstName, eyeColor, day){
//         this.firstName = firstName
//         this.eyeColor = eyeColor
//         this.day = day

//     }
//     // workAlarm method
//      workAlarm(day) {

//         if (this.day === "Saturday") {
//         return("Go to work today")
//         }else{
//         return("Stay in bed all day")
//         }
//     }
// }

// // Instances - objects
// const megan = new Student("Megan", "Green", "Wednesday")
// const kate = new Student("Kate", "Brown","Sunday")
// const elliot = new Student("Elliot", "Blue", "Saturday")

// console.log(megan)
// console.log(kate)
// console.log(elliot)

// console.log(elliot.workAlarm())