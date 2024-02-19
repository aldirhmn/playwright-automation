import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageObjects/LoginPage';
import config from '../config/config';
import { users } from '../helpers/UserRoles';

for (const [role, credentials] of Object.entries(users)) {
    test.describe(`Sauce Demo Login Test - ${role}`, () => {
        let loginPage: LoginPage;

        test.beforeEach(async ({ page }) => {
            loginPage = new LoginPage(page);
            await loginPage.navigate(config.baseUrl);
        });

        test(`[${role}] - should be able to login correctly`, async () => {
            await loginPage.login(credentials.username, credentials.password);

            if (role === 'lockedOutUser') {
                const errorMessage = await loginPage.getErrorMessage();
                expect(errorMessage).toContain('Sorry, this user has been locked out.');
            } else {
                const isInventoryVisible = await loginPage.isInventoryVisible();
                expect(isInventoryVisible).toBe(true);
            }
        });
    });
}
