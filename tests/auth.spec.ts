import { expect, test } from "@playwright/test";
test.describe("User Sign-up and Login", () => {
  test("should redirect unauthenticated user to signin page", async ({
    page,
  }) => {
    await page.goto("/personal");
    await expect(page).toHaveURL("/signin");
  });
});
