class Person {
     constructor(name = 'Anonymus', age = 0) {
         this.name = name;
         this.age = age;
     }
     getGreeting() {
         return `hi. i am ${this.name}!`;
     }
     getDescription() {
         return `${this.name} is ${this.age} year(s) old`
     }
}
class Traveler extends Person {
    constructor(name, age, location) {
        super(name,age);
        this.location = location;
    }
    getGreeting() {
        let greeting = super.getGreeting()

        if (this.location) {
            greeting += ` and im from ${this.location}`
        }
        return greeting
    }
}
const me = new Traveler ('Robert Starak', 26,'Poland');
const other = new Traveler ('Ziomek atomek');

console.log (me.getGreeting());
console.log (other.getGreeting())