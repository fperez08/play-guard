import type { Page } from '@playwright/test';

export class Login {
  constructor(private readonly page: Page) {}
  clicks_on = {
    remember_me: async () => {
      await this.page.getByLabel('Remember me').click();
    },
    sign_in: async () => {
      await this.page.getByRole('button', { name: 'SIGN IN' }).click();
    },
    sign_up: async () => {
      await this.page
        .getByRole('link', {
          name: /don't have an account\? sign up/i,
        })
        .click();
    },
  };
  types_into = {
    user_name: async (userName: string) => {
      await this.page
        .getByRole('textbox', { name: /username/i })
        .fill(userName);
    },
    password: async (password: string) => {
      await this.page.getByLabel(/password/i).fill(password);
    },
  };
  navigates_to = {
    sign_in: async () => {
      await this.page.goto('/signin');
    },
  };
}
