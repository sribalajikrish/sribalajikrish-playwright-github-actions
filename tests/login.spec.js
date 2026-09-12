import path from 'path';
import { test } from '../fixtures/login.fixture.js';
// import { readCsv } from '../utils/csvReader.js';
import { getTestData } from '../utils/testDataReader.js';
let expectedResult='success';

// const users = readCsv(
//     path.resolve('test-data/users.csv')
// );

// const users = getTestData(
//     'json',
//     'users.json'
// );


// for (const user of users) {

    test(`Login`, async ({ loginPage }) => {

        await loginPage.navigate();
// const username =
//             user.username === 'ADMIN_USERNAME'
//                 ? process.env.ADMIN_USERNAME
//                 : user.username;

//         const password =
//             user.password === 'ADMIN_PASSWORD'
//                 ? process.env.ADMIN_PASSWORD
//                 : user.password;

        console.log(`User Name: ${process.env.ADMIN_USERNAME}`);
        console.log(`Password: ${process.env.ADMIN_PASSWORD}`);
        // await loginPage.login(
        //     process.env.ADMIN_USERNAME,
        //     process.env.ADMIN_PASSWORD
        // );

        // if (expectedResult === 'success') {

        //     await loginPage.verifySuccessfulLogin();

        // } else {

        //     await loginPage.verifyLoginFailure();
        // }
    });
// }
