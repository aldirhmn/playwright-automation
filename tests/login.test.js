"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const LoginPage_1 = require("../pageObjects/LoginPage");
const config_1 = __importDefault(require("../config/config"));
const UserRoles_1 = require("../helpers/UserRoles");
for (const [role, credentials] of Object.entries(UserRoles_1.users)) {
    test_1.test.describe(`Sauce Demo Login Test - ${role}`, () => {
        let loginPage;
        test_1.test.beforeEach(({ page }) => __awaiter(void 0, void 0, void 0, function* () {
            loginPage = new LoginPage_1.LoginPage(page);
            yield loginPage.navigate(config_1.default.baseUrl);
        }));
        (0, test_1.test)(`[${role}] - should be able to login correctly`, () => __awaiter(void 0, void 0, void 0, function* () {
            yield loginPage.login(credentials.username, credentials.password);
            if (role === 'lockedOutUser') {
                const errorMessage = yield loginPage.getErrorMessage();
                (0, test_1.expect)(errorMessage).toContain('Sorry, this user has been locked out.');
            }
            else {
                const isInventoryVisible = yield loginPage.isInventoryVisible();
                (0, test_1.expect)(isInventoryVisible).toBe(true);
            }
        }));
    });
}
