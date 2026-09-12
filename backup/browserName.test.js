import { test, expect } from '@playwright/test';

test('Login', async () => {
    const playwright = require('playwright');
    // const selectBrowser = [
    //     "chromium",
    //     "firefox",
    //     "webkit",
    //     "opera",
    //     "duck duck go"
    // ];

    // let i=1;
    // for (const browserType of selectBrowser ){
    //   console.log(` ${i} : ${browserType}`);
    //   i++;
    //   }
    // });

    // const environment = ["QA", "UAT", "PROD"];

    // console.log(`2nd Environment : ${environment[1]}`);

    // const employee = {name:"sribalaji",designation:"QA Manager",experience:"12 Years"};
    // console.log(employee);

    // const user = { name: "sribalaji", designation: "QA Manager", experience: "12 Years" };
    // console.log("Before adding department :" , user);
    // user.department = "CSE";
    // console.log("After adding department :" , user);

    const users = [
        { username: "Admin", password: "admin@1234", role: "Manager" },
        { username: "User1", password: "user1@1234", role: "Tester" },
        { username: "user2", password: "user2@1234", role: "Developer" }
    ];

    for (const user of users) {
        console.log(`${user.username} - ${user.role}`);
    }

});