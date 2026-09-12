// Interview Question 1

// const employee = {

//     name: "Sri Balaji",

//     designation: "QA Manager",

//     experience: 6

// };

// Using destructuring:



// Extract name and designation.

// Rename experience to yearsOfExperience.



// Write the code.

import { test, expect } from '@playwright/test';
import { add }  from '../page/add';

test('Login', async ({ page }) => {

    // const employee = {
    //     name: "Sri Balaji",
    //     designation: "QA Manager",
    //     experience: 6
    // };


    // const {name, designation, experience : yearsOfExperience} = employee;
    // console.log("Extracted Name :", name);
    // console.log("Extracted Designation :", designation);
    // console.log("Extracted and renamed experience :", yearsOfExperience);

    // const numbers = [10, 20, 30, 40, 50];

//     Write destructuring code to:

// Store 10 in first
// Skip 20
// Store 30 in third
// Store the remaining values in others

// const [first=zero]=numbers;
// console.log("Zero index saved in first:",first)
// const [zero, ,second,...others]=numbers;
// console.log("Zero:",zero,"Second:",second,"Others:",others);
// console.log(zero);

// const employee = {
//     name: "Sri",
//     age: 36
// };

// const { age, name } = employee;
// console.log(age,name);

// const values = ["Sri", 36];

// const [age, name] = values;

// console.log(age,name);

// const numbers = [10];

// const [first, second, third = 100] = numbers;

// console.log(first);
// console.log(second);
// console.log(third);

add(5,5);

});