export async function login(page, username, password) {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.fill('[name="username"]', username);
    await page.fill('[name="password"]', password);

    await page.click("button[type='submit']");
}