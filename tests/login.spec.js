import path from 'path';
import { test } from '../fixtures/login.fixture.js';
// import { readCsv } from '../utils/csvReader.js';
import { getTestData } from '../utils/testDataReader.js';

// const users = readCsv(
//     path.resolve('test-data/users.csv')
// );

const users = getTestData(
    'json',
    'users.json'
);


for (const user of users) {

    test(`Login - ${user.username}`, async ({ loginPage }) => {

        await loginPage.navigate();

        await loginPage.login(
            user.username,
            user.password
        );

        if (user.expectedResult === 'success') {

            await loginPage.verifySuccessfulLogin();

        } else {

            await loginPage.verifyLoginFailure();
        }
    });
}