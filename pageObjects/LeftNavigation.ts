import type { Page } from '@playwright/test';

export class LeftNavigation {
  constructor(private readonly page: Page) {}
  clicks_on = {
    bank_accounts: async () => {
      await this.page.getByText(/bank accounts/i).click();
    },
  };
}
