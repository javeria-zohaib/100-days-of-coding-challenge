var laptop = {
    make: "dell",
    model: "dell2345",
    year: 2021,
    describe: function () {
        return "this laptop is  manufactured in ".concat(laptop.year, "  by ").concat(laptop.make, "  and  its modelno is ").concat(laptop.model);
    },
};
console.log(laptop, laptop.describe());
/*Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.*/
var laptops = [
    { make: "dell", model: "XP 120", year: 2020 },
    { make: "apple", model: "macbook", year: 2022 },
    { make: "hp", model: "spectra w33", year: 2021 }
];
var laptop1 = laptops[0], laptop2 = laptops[1];
console.log(laptop1);
console.log(laptop2);
/*  Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.*/
function loghobbies() {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    hobbies.forEach(function (hobby) {
        console.log("I enjoy ".concat(hobby));
    });
}
loghobbies("baking", "reading", "coding");
// Q50 - Multiline Template Literals: Use template literals to create a multiline string that describes your ideal day. Include at least three different activities.
var myidealday = "my ideal day involve :\n1. wakingup early and go for a jog,\n2. spending quality time with my kids ,\n3. Ending day by reading a goodbook";
console.log(myidealday);
// Q51 - Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.
function calculatearea(width, height) {
    return width * height;
}
var calculateareaarrow = function (width, height) {
    return width * height;
};
console.log(calculateareaarrow(3, 4));
// Q52 - Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts.
var smartphone = {
    brand: "samsung",
    model: 2021,
    specs: {
        storage: "64 GB",
        screensize: "6.2 inches",
        batterylife: "18 hrs"
    }
};
console.log(smartphone);
// Q53 - Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
var developerskills = {
    language: ["javascript", "typescript", "python"],
    tools: ["git", "webpack", "docker"],
    framework: ["react", "angular", "vue"]
};
console.log(developerskills, "language: ".concat(developerskills.language[0], ", tools: ").concat(developerskills.tools[1], ", framework:").concat(developerskills.framework[2]));
// Q54 - Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.
function createobjectwithdynamickey(key, value) {
    var dynamicObject = {};
    dynamicObject[key] = value;
    return dynamicObject;
}
;
var userpreference = (createobjectwithdynamickey("theme", "dark"));
userpreference = (createobjectwithdynamickey("student", "fatima"));
console.log(userpreference);
// Q55 - Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.
var numbers = [2, 3, 4, 5, 6, 7];
var Doublenumbers = numbers.map(function (number) { return number * 2; });
console.log(Doublenumbers);
// Q56 - Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
var mixedarray = [1, "apple", 2, "carrot", 3, "banana", true];
var stringarray = mixedarray.filter(function (item) { return typeof item === "string"; });
console.log(stringarray);
// Q57 - Find the Average Grade: Given a list of grades, calculate the average grade.
// A list of grades
var grades = [88, 94, 72, 99, 53, 77];
var averagegrades = grades.reduce(function (total, grades) { return total + grades; }, 0) / grades.length;
console.log(averagegrades);
// Q58 - Write a simple program that can take lots of scores and find their average.
function findaverage() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    var total = scores.reduce(function (sum, score) { return sum + score; }, 0);
    return total / scores.length;
}
console.log(findaverage(23, 45, 43, 67, 89, 99));
