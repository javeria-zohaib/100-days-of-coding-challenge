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
