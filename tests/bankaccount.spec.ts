import { test, expect } from '../fixtures/bank_account_fixture';
import { randomNumber } from '../utils/random';
test.describe('Bank Accounts', () => {
  test.use({ storageState: '.auth/user.json' });

  test('creates a new bank account', async ({
    page,
    LeftNavigation,
    BankAccount,
    Assert,
  }) => {
    const bankName = `Banamex-${randomNumber(100)}`;
    const routingNumber = randomNumber(9);
    const accountNumber = randomNumber(9);

    await page.goto('/');
    await LeftNavigation.clicks_on.bank_accounts();
    await BankAccount.clicks_on.create();
    await BankAccount.types_into.bank_name(bankName);
    await BankAccount.types_into.routing_number(routingNumber);
    await BankAccount.types_into.account_number(accountNumber);
    await BankAccount.clicks_on.save();

    await Assert.text.is_visible(bankName);
  });
});
