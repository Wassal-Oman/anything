import { Controller, Get, Render } from '@nestjs/common';

@Controller('shop')
export class ShopController {

    // home
    @Get('/')
    @Render("shop/home")
    viewHome() {}
}
