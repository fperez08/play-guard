import { test as base, expect } from '@playwright/test';
import { Login } from '../pageObjects/Login';
import { Data } from '../data/data';
import { Signup } from '../pageObjects/Signup';
import { Users } from '../api/users';
type AuthFixture = {
  Login: Login;
  Data: Data;
  Signup: Signup;
  Users: Users;
};

export const test = base.extend<AuthFixture>({
  Login: async ({ page }, use) => {
    await use(new Login(page));
  },
  Data: async ({}, use) => {
    const data = require('../data/database-seed.json');
    await use(new Data(data));
  },
  Signup: async ({ page }, use) => {
    await use(new Signup(page));
  },
  Users: async ({ browser }, user) => {
    const request = (await browser.newContext({ baseURL: process.env.API_URL }))
      .request;
    await user(new Users(request));
  },
});
export { expect } from '@playwright/test';
