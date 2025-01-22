import { test as base, expect } from "@playwright/test";
import { Login } from "../pageObjects/Login";
import { Data } from "../data/data";
import { Signup } from "../pageObjects/Signup";
type Fixture = {
  Login: Login;
  Data: Data;
  Signup: Signup;
};

export const test = base.extend<Fixture>({
  Login: async ({ page }, use) => {
    await use(new Login(page));
  },
  Data: async ({}, use) => {
    const data = require("../data/database-seed.json");
    await use(new Data(data));
  },
  Signup: async ({ page }, use) => {
    await use(new Signup(page));
  },
});
export { expect } from "@playwright/test";
