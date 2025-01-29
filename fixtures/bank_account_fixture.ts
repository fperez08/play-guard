import { test as base, expect } from '@playwright/test';
import { LeftNavigation } from '../pageObjects/LeftNavigation';
import { BankAccounts } from '../pageObjects/BankAccounts';
import { Assert } from '../assertions/Assert';
type AuthFixture = {
  LeftNavigation: LeftNavigation;
  BankAccount: BankAccounts;
  Assert: Assert;
};

export const test = base.extend<AuthFixture>({
  LeftNavigation: async ({ page }, use) => {
    await use(new LeftNavigation(page));
  },
  BankAccount: async ({ page }, use) => {
    await use(new BankAccounts(page));
  },
  Assert: async ({ page }, use) => {
    await use(new Assert(page));
  },
});
export { expect } from '@playwright/test';
