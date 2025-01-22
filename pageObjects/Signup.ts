import type { Page } from "@playwright/test";

export class Signup {
  constructor(private readonly page: Page) {}
  clicks_on = {
    sign_up: async () => {
      await this.page.getByRole("button", { name: /sign up/i }).click();
    },
  };
  types_into = {
    first_name: async (firstName: string) => {
      await this.page
        .getByRole("textbox", { name: /first name/i })
        .fill(firstName);
    },
    last_name: async (lastName: string) => {
      await this.page
        .getByRole("textbox", { name: /last name/i })
        .fill(lastName);
    },
    username: async (username: string) => {
      await this.page
        .getByRole("textbox", { name: /username/i })
        .fill(username);
    },
    password: async (password: string) => {
      await this.page
        .locator('[data-test="signup-password"]')
        .getByLabel("Password *")
        .fill(password);
    },
    confirm_password: async (password: string) => {
      await this.page.getByLabel("Confirm Password *").fill(password);
    },
  };
  navigates_to = {
    sign_up: async () => {
      await this.page.goto("/signup");
    },
  };
}
