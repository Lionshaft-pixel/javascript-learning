class Student {
    constructor(name, last_name, age) {
        this.name = name;
        this.last_name = last_name;
        this.age = age;
    }

    getInfo() {
        return this.name + " " + this.last_name + ", Age: " + this.age;
    }
}

const students = {
    "13516": new Student("Alex", "Smith", 15),
    "29734": new Student("Jordan", "Williams", 17),
    "94317": new Student("Jaydon", "Meyer", 18),
    "51973": new Student("Gino", "Hernandez", 17)
};

while (true) {
    let input = prompt("Enter Student ID");

    if (students[input]) {
        alert(students[input].getInfo());
        break;
    } else {
        alert("Invalid ID!");
    }
}