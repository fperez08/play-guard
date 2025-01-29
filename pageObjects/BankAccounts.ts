import type { Page } from '@playwright/test';

export class BankAccounts {
  constructor(private readonly page: Page) {}
  clicks_on = {
    create: async () => {
      await this.page.getByRole('link', { name: /create/i }).click();
    },
    save: async () => {
      await this.page.getByRole('button', { name: /save/i }).click();
    },
  };
  types_into = {
    bank_name: async (name: string) => {
      await this.page.getByPlaceholder('Bank Name').fill(name);
    },
    routing_number: async (number: string) => {
      await this.page.getByPlaceholder('Routing Number').fill(number);
    },
    account_number: async (number: string) => {
      await this.page.getByPlaceholder('Account Number').fill(number);
    },
  };
}
