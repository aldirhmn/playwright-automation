import { Locator, Page } from "@playwright/test";

export class OrderInquiryPage {
  private page: Page;
  private btnBuyNow: Locator;
  private btnCheckout: Locator;
  private fieldAmount: Locator;
  private fieldName: Locator;
  private fieldEmail: Locator;
  private fieldPhoneNumber: Locator;
  private fieldCity: Locator;
  private fieldAddress: Locator;
  private postalCode: Locator;

  constructor(page: Page) {
    this.page = page;
    this.btnBuyNow = page.locator("//a[normalize-space()='BUY NOW']");
    this.fieldAmount = page.locator("//input[@type='number']");
    this.fieldName = page.locator("(//input[@type='text'])[1]");
    this.fieldEmail = page.locator("//input[@type='email']");
    this.fieldPhoneNumber = page.locator("(//input[@type='text'])[2]");
    this.fieldCity = page.locator("(//input[@type='text'])[3]");
    this.fieldAddress = page.locator("//textarea");
    this.postalCode = page.locator("//input[@value='10220']");
    this.btnCheckout = page.locator("//div[@class='cart-checkout']");
  }

  async navigateInquiry(url: string): Promise<void> {
    await this.page.goto(url);
    await this.page.screenshot({ path: "screenshots/01. Page Inquiry.png" });
  }

  async clickBuy(): Promise<void> {
    await this.btnBuyNow.click();
    await this.page.screenshot({ path: "screenshots/02. Click Buy Now.png" });
  }

  async fillData(
    amount: string,
    name: string,
    email: string,
    phoneNumber: string,
    city: string,
    address: string,
    postalCode: string
  ): Promise<void> {
    await this.fieldAmount.fill(amount);
    await this.fieldName.fill(name);
    await this.fieldEmail.fill(email);
    await this.fieldPhoneNumber.fill(phoneNumber);
    await this.fieldCity.fill(city);
    await this.fieldAddress.fill(address);
    await this.postalCode.fill(postalCode);
    await this.page.screenshot({ path: "screenshots/03. Fill Data.png" });
  }
}
