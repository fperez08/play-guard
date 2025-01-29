import { expect, type Page } from '@playwright/test';

export class GenericAssertions {
  constructor(private readonly page: Page) {}
  text = {
    is_visible: async (text: string | RegExp) => {
      await expect(this.page.getByText(text)).toBeVisible();
    },
  };
}
