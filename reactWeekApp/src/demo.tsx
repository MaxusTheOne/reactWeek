
interface person {
    id?: number;
    name: string;
    age: number;
}

class Person {
    id: number;
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.id = Math.floor(Math.random() * 1000); // Generate a random id
        this.name = name;
        this.age = age;
    }
}

const person: Person = new Person("John Doe", 25);
console.log(person);
