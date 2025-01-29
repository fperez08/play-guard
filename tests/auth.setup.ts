import { test as setup, expect } from '@playwright/test';
import { Login } from '../pageObjects/Login';
import path from 'path';

const authFile = path.join(__dirname, '../.auth/user.json');

setup('authenticate', async ({ page }) => {
  const login = new Login(page);

  await login.navigates_to.sign_in();
  await login.types_into.user_name('Heidi.Effertz37');
  await login.types_into.password('s3cret');
  await login.clicks_on.sign_in();
  await expect(page).toHaveURL('/');
  await page.context().storageState({ path: authFile });
});
