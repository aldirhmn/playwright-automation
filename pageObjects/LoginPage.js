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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPage = void 0;
class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.errorMessage = page.locator('[data-test="error"]');
        this.inventoryList = page.locator('.inventory_list');
    }
    navigate(url) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.goto(url);
        });
    }
    login(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.usernameInput.fill(username);
            yield this.passwordInput.fill(password);
            yield this.loginButton.click();
        });
    }
    getErrorMessage() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            return (_a = yield this.errorMessage.textContent()) !== null && _a !== void 0 ? _a : "No Error Message";
        });
    }
    isInventoryVisible() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.inventoryList.isVisible();
            return yield this.inventoryList.isVisible();
        });
    }
}
exports.LoginPage = LoginPage;
