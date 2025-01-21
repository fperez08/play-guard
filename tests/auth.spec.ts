import { expect, test } from "./../fixtures/fixture";
test.describe("User Sign-up and Login", () => {
  test("should redirect unauthenticated user to signin page", async ({
    page,
  }) => {
    await page.goto("/personal");
    await expect(page).toHaveURL("/signin");
  });
  test("should redirect to the home page after login", async ({
    Login,
    page,
  }) => {
    await Login.navigates_to.sign_in();
    await Login.types_into.user_name("Heidi.Effertz37");
    await Login.types_into.password("s3cret");
    await Login.clicks_on.remember_me();
    await Login.clicks_on.sign_in();
    await expect(page).toHaveURL("/");
  });
});
