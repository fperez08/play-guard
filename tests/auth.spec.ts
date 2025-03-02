import { expect, test } from '../fixtures/auth_fixture';
test.describe('User Sign-up and Login', () => {
  test('should redirect unauthenticated user to signin page', async ({
    page,
  }) => {
    await page.goto('/personal');
    await expect(page).toHaveURL('/signin');
  });
  test('should redirect to the home page after login', async ({
    Login,
    page,
  }) => {
    await Login.navigates_to.sign_in();
    await Login.types_into.user_name('Heidi.Effertz37');
    await Login.types_into.password('s3cret');
    await Login.clicks_on.remember_me();
    await Login.clicks_on.sign_in();
    await expect(page).toHaveURL('/');
  });
  test('should allow a visitor to sign-up', async ({ Signup, page }) => {
    await Signup.navigates_to.sign_up();
    await Signup.types_into.first_name('Bob');
    await Signup.types_into.last_name('Ross');
    await Signup.types_into.username('PainterJoy90');
    await Signup.types_into.password('s3cret');
    await Signup.types_into.confirm_password('s3cret');
    await Signup.clicks_on.sign_up();
    await expect(page).toHaveURL('/signin');
  });
  test('should allow a visitor to login', async ({ Users, Login, page }) => {
    const userInfo = {
      firstName: 'Bob',
      lastName: 'Ross',
      username: 'PainterJoy90',
      password: 's3cret',
      confirmPassword: 's3cret',
    };
    const response = await Users.createUser(userInfo);
    await expect(response).toBeOK();
    await Login.navigates_to.sign_in();
    await Login.types_into.user_name(userInfo.username);
    await Login.types_into.password(userInfo.password);
    await Login.clicks_on.remember_me();
    await Login.clicks_on.sign_in();
    await expect(page).toHaveURL('/');
  });
});
