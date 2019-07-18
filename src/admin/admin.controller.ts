import { Controller, Get, Render } from '@nestjs/common';

@Controller('admin')
export class AdminController {

    // home
    @Get()
    @Render("admin/home")
    home() {}

    // profile
    @Get("profile")
    @Render("admin/profile")
    profile() {}

    // users
    @Get("users")
    @Render("admin/users")
    users() {}

    // categories
    @Get("categories")
    @Render("admin/categories")
    categories() {}

    // products
    @Get("products")
    @Render("admin/products")
    products() {}

    // orders
    @Get("orders")
    @Render("admin/orders")
    orders() {}
}
