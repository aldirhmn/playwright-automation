import { test, expect } from "@playwright/test";
import { OrderInquiryPage } from "../../pageObjects/DemoTrans/OrderInquiryPage";
import config from "../../config/config";

test.describe("Inquiry Demo Mid Trans", () => {
  let orderInquiryPage: OrderInquiryPage;

  test.beforeEach(async ({ page }) => {
    orderInquiryPage = new OrderInquiryPage(page);
    await orderInquiryPage.navigateInquiry("https://demo.midtrans.com/");
  });

  test("Inqury Before Payment", async () => {
    await orderInquiryPage.clickBuy();

    await orderInquiryPage.fillData(
      "50000",
      "Jabal Rahmatullah",
      "jabal@gmail.com",
      "081212412414",
      "Bandung",
      "Jalan Raya Tebet",
      "12314"
    );
  });
});
