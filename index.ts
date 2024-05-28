/*
Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.

Explain & TIP: Objects can also contain functions (methods) that can perform actions using the object's properties. This introduces method definition within objects.*/
type Product={
    make:string,
    model:string,
    year:number,
    describe:()=>string
    }
let laptop:Product={
    make:"dell",
    model:"dell2345",
    year:2021,
    describe:()=>{
        return`this laptop is  manufactured in ${laptop.year}  by ${laptop.make}  and  its modelno is ${laptop.model}`
        
    },

}
console.log(laptop,laptop.describe())
/*Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.*/
let laptops=[
    {make:"dell",model:"XP 120",year:2020},
    {make:"apple",model:"macbook",year:2022},
    {make:"hp",model:"spectra w33",year:2021}
];
let [laptop1,laptop2]=laptops;
console.log(laptop1);
console.log(laptop2);
/*  Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.*/
function loghobbies (...hobbies:string[]){
    hobbies.forEach(hobby=> {
        console.log (`I enjoy ${hobby}`)
        
    });
}
loghobbies("baking" ,"reading","coding");
// Q50 - Multiline Template Literals: Use template literals to create a multiline string that describes your ideal day. Include at least three different activities.
let myidealday=`my ideal day involve :
1. wakingup early and go for a jog,
2. spending quality time with my kids ,
3. Ending day by reading a goodbook`
console.log(myidealday);
// Q51 - Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.
function calculatearea (width:number,height:number){
    return width*height
}
let calculateareaarrow=(width:number,height:number)=>{
    return width*height
}
console.log(calculateareaarrow(3,4));
// Q52 - Make a Smartphone Object: Create a simple way to keep track of a smartphone's details. Include its brand, model, and other key features like how much storage it has, the size of its screen, and how long its battery lasts.
let smartphone={
    brand:"samsung",
    model:2021,
    specs:{
    storage:"64 GB",
    screensize:"6.2 inches",
    batterylife:"18 hrs"}

}
console.log(smartphone);
// Q53 - Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
let developerskills={
    language:["javascript","typescript","python"],
    tools:["git","webpack","docker"],
    framework:["react","angular","vue"]
};
console.log(developerskills,`language: ${developerskills.language[0]}, tools: ${developerskills.tools[1]}, framework:${developerskills.framework[2]}`)
// Q54 - Making Flexible Object Keys: Learn how to set up a list where you can change the name of each section based on what you need at that moment, like adjusting labels based on user choices.
function createobjectwithdynamickey (key:string,value:string) {
    let dynamicObject={};
    dynamicObject[key]=value;
    return dynamicObject;

};
let userpreference=(createobjectwithdynamickey("theme","dark"));
userpreference=(createobjectwithdynamickey("student","fatima"));
console.log(userpreference);
// Q55 - Double Numbers in an Array: Make a list of numbers. Then, use a trick to make a new list where each number is twice its original value.
let numbers=[2,3,4,5,6,7];
let Doublenumbers=numbers.map((number)=>number*2);
console.log(Doublenumbers);
// Q56 - Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
let mixedarray=[1,"apple",2,"carrot",3,"banana",true];
let stringarray=mixedarray.filter((item) =>typeof item === "string");
console.log(stringarray);
// Q57 - Find the Average Grade: Given a list of grades, calculate the average grade.
// A list of grades

let grades = [88, 94, 72, 99, 53, 77];
let averagegrades=grades.reduce((total,grades )=>{return total+grades},0)/grades.length;
console.log(averagegrades)










