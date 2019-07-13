import { Controller, Get, Render } from '@nestjs/common';

@Controller('admin')
export class AdminController {

    // home
    @Get()
    @Render("admin/home")
    home() {}
}
