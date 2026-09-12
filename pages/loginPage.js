export class LoginPage {

    constructor(page) {
        this.page = page;

        this.usernameInput = page.getByPlaceholder('Username');
        this.passwordInput = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', { name: 'Login' });

        this.invalidLoginMessage = page.getByText(
            'Invalid credentials'
        );
    }

    async navigate() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async verifySuccessfulLogin() {
        await this.page.waitForURL(/dashboard/);
    }

    async verifyLoginFailure() {
        await this.invalidLoginMessage.waitFor({
            state: 'visible'
        });
    }
}