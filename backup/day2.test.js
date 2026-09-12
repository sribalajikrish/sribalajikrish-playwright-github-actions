import { test, expect } from '@playwright/test';
import { login } from '../page/login';

test('Login', async ({ page, login }) => {

   await login(page,"Admin","admin123");

});