import { Controller, Get, Render } from '@nestjs/common';

@Controller('supplier')
export class SupplierController {

    // home
    @Get()
    @Render("supplier/home")
    home() {}

    // profile
    @Get("profile")
    @Render("supplier/profile")
    profile() {}

    // products
    @Get("products")
    @Render("supplier/products")
    products() {}

    // orders
    @Get("orders")
    @Render("supplier/orders")
    orders() {}
}
