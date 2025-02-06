import { chromium } from 'playwright';
import c from "../mock/shopee.vn_06-02-2025.json"
(async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();

    // Danh sách cookie
    // const cookies:any = [
    //     {
    //         domain: ".shopee.vn",
    //         expirationDate: 1746649174,
    //         name: "_fbp",
    //         path: "/",
    //         sameSite: "Lax",
    //         secure: false,
    //         value: "fb.1.1738872979075.184747486678023841"
    //     },
    //     {
    //         domain: ".shopee.vn",
    //         expirationDate: 1773433176,
    //         name: "_ga",
    //         path: "/",
    //         sameSite: "None",
    //         secure: false,
    //         value: "GA1.1.1487350841.1738872981"
    //     },
    //     {
    //         domain: ".shopee.vn",
    //         expirationDate: 1773433176,
    //         name: "_ga_4GPP1ZXG63",
    //         path: "/",
    //         sameSite: "None",
    //         secure: false,
    //         value: "GS1.1.1738872980.1.1.1738873176.57.0.0"
    //     }
    // ];


     
    // Thêm cookie vào context
    console.log(c.length)
    await context.addCookies(c as any );

    // Mở trang Shopee
    const page = await context.newPage();
    await page.goto('https://shopee.vn');

    // Dừng lại để kiểm tra
    await page.waitForTimeout(5000);

    // Đóng trình duyệt
    await browser.close();
})();
