import { Controller, Get, Render } from '@nestjs/common';

@Controller('shop')
export class ShopController {

    // home
    @Get()
    @Render("shop/home")
    viewHome() {}

    // profile
    @Get("profile")
    @Render("shop/profile")
    profile() {}

    // products
    @Get("products")
    @Render("shop/products")
    products() {}

    // orders
    @Get("orders")
    @Render("shop/orders")
    orders() {}
}
