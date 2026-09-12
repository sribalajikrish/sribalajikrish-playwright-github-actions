import { test, expect } from '@playwright/test';
test('Login', async () => {
    const playwright = require('playwright');
    // const browserName = [
    //     "chrome",
    //     "firefox",
    //     "webkit"
    // ];
    // browserName.forEach(browser => {
    //     console.log(browser);
    // });

    // const numbers=[2,3,4];
    // const multipliedValue = numbers.map(num => num * 2);
    // console.log(multipliedValue);

    // const employeeNames = [{name:"Sri Balaji",role:"Testing"},{name:"Vignesh",role:"Electrical"}]
    // const nameList = employeeNames.map(name => name.name);
    // console.log(nameList);

    // const numberList = [10,56,96,25,0.51];
    // const greaterThanFifty = numberList.filter(numbers => numbers > 50);
    // console.log(greaterThanFifty);

    // const employeeNames = [{userName:"Credit",role:"Credit Manager"},{userName:"Admin",role:"Admin Dept"}]
    // console.log(employeeNames.find(employee => employee.userName === "Admin" ));

    // const numberList = [1, 2, 3];
    // const total = numberList.reduce((sum, num) => sum + num,0);
    // console.log(total);

    //     const employeeNames = [{name:"Sri Balaji",role:"Manager"},{name:"Vignesh",role:"Managers"}]
    // const nameList = employeeNames.some(empName => empName.role==="Manager");
    // console.log(nameList);

//     Exercise 8 (Enterprise Challenge)

// Create an array of five users with username, role, and status. Use:

// filter() to retrieve active users.
// map() to extract usernames.
// some() to check if any user is an Admin.
// every() to verify all users have a username.
// find() to locate a specific user.

     const employeeNames = [{name:"Sri Balaji",role:"Manager", status:"Active"},{name:"Vignesh",role:"Electricals", status:"Inactive"},{name:"Ragavendra",role:"Security Testing", status:"Active"},{name:"Ranjani",role:"Security Testing", status:"Inactive"}, {name:"Nivetha",role:"Security Testing", status:"Inactive"}]
     console.log("Active user details : ",employeeNames.filter(activeEmployee => activeEmployee.status==='Active'));
     console.log("Extracted name:", employeeNames.map(activeEmployee => activeEmployee.name));
     console.log("Check any user is admin:", employeeNames.some(adminemployee => adminemployee.role==="Admin"));
     console.log("All user has username :", employeeNames.every(employeeUserName => employeeUserName.name.length > 0));
     console.log("specific user : ", employeeNames.find(findEmployee => findEmployee.name==="Ranjani"));

     
        console.log("Optomized Code : ", employeeNames.filter(empName => empName.role==="Manager").find(empName => empName.name==="Sri Balaji"));


     console.log("Optomized Code : ", employeeNames.find(empName => empName.role==="Manager" && empName.name==="Sri Balaji"));
     
});