class Person {
    constructor(name = "Anonymous", age = 0) {
        this.name = name;
        this.age = age;
    }

    getDetails(){
        return `Hi, my name is ${this.name} and I'm ${this.age} y.o.`
    }
}

const person1 = new Person("Mike", 26);
console.log(person1.getDetails());

class Student extends Person {
    constructor(name, age, major) {
        super();
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDetails() {
        let details = super.getDetails();

        if(this.hasMajor()) {
            details += ` My major is ${this.major}.`
        }
    }
}

const person2 = new Student("Aichurok", 22, "Computer Science");
console.log(person2.getDetails());