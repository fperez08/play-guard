import { test as base, expect } from "@playwright/test";
import { Login } from "../pageObjects/Login";

type Fixture = {
  Login: Login;
};

export const test = base.extend<Fixture>({
  Login: async ({ page }, use) => {
    await use(new Login(page));
  },
});
export { expect } from "@playwright/test";
