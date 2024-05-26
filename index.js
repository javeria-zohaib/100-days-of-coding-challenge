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
