const input = document.getElementById("input");
const company = document.getElementById("company");
const model = document.getElementById("model");
const condition = document.getElementById("condition");
const price = document.getElementById("price");

class Vehicle {
    constructor(company, model, condition, price) {
        this.company = company;
        this.model = model;
        this.condition = condition;
        this.price = price;
    }
}

const cars = {
    ford_mustang: new Vehicle("Ford", "Ford Mustang", "Mint", "74,364"),
    toyota_corolla: new Vehicle("Toyota", "Toyota Corolla", "Excellent", "53,468"),
    honda_civic: new Vehicle("Honda", "Honda Civic", "Good", "41,200"),
    bmw_m3: new Vehicle("BMW", "BMW M3", "Excellent", "88,900"),
    audi_a4: new Vehicle("Audi", "Audi A4", "Very Good", "67,500"),
    tesla_model3: new Vehicle("Tesla", "Model 3", "New", "99,999"),
    nissan_gtr: new Vehicle("Nissan", "Nissan GTR", "Mint", "120,000")
};

input.addEventListener("input", function () {
    const value = input.value.toLowerCase().trim();

    if (cars[value]) {
        updateUI(cars[value]);
    } else {
        showNotFound();
    }
});

function updateUI(car) {
    company.textContent = `Company: ${car.company}`;
    model.textContent = `Model: ${car.model}`;
    condition.textContent = `Condition: ${car.condition}`;
    price.textContent = `Price: $${car.price}`;
}

function showNotFound() {
    company.textContent = "Car not found :(";
    model.textContent = "";
    condition.textContent = "";
    price.textContent = "";
}

toyota_corolla.info();
ford_mustang.info();