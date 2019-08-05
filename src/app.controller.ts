import {
  Controller,
  Render,
  Post,
  ValidationPipe,
  Body,
  Get,
  Res,
  InternalServerErrorException,
} from '@nestjs/common';
import * as _ from 'lodash';
import { AppService } from './app.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { UserType } from './user-type.enum';

@Controller()
export class AppController {
  // inject objects
  constructor(private appService: AppService) {}

  // sign in - GET
  @Get('/')
  @Render('login')
  login() {}

  // sign in - POST
  @Post('signin')
  async signIn(@Body(ValidationPipe) loginDto: LoginDto, @Res() res) {
    const response = await this.appService.signIn(loginDto);

    if (response.statusCode === 200) {
      if (_.isEmpty(response.data)) {
        console.log('WRONG EMAIL OR PASSWORD');
        res.redirect('/');
      } else {
        switch (response.data.type) {
          case UserType.ADMIN:
            res.redirect('/admin');
            break;
          case UserType.SHOP:
            res.redirect('/shop');
            break;
          case UserType.SUPPLIER:
            res.redirect('/supplier');
            break;
          default:
            res.redirect('/');
        }
      }
    } else {
      res.redirect('/');
    }
  }

  // sign up - GET
  @Get('signup')
  @Render('register')
  register() {}

  // sign up - POST
  @Post('signup')
  async signUp(@Body(ValidationPipe) registerDto: RegisterDto, @Res() res) {
    const response = await this.appService.signUp(registerDto);

    if (response.statusCode !== 201) {
      res.redirect('/signup');
    } else {
      res.redirect('/');
    }
  }

  // create admin - GET
  @Get('create-admin')
  @Render('create-admin')
  createAdminUser() {}

  // create admin - POST
  @Post('create-admin')
  async signUpAdmin(
    @Body(ValidationPipe) registerDto: RegisterDto,
    @Res() res,
  ) {
    const response = await this.appService.signUp(registerDto);

    if (response.statusCode !== 201) {
      res.redirect('/create-admin');
    } else {
      res.redirect('/');
    }
  }

  // about - GET
  @Get('about')
  @Render('about')
  about() {}

  // contact - GET
  @Get('contact')
  @Render('contact')
  contact() {}

  // terms and conditions - GET
  @Get('terms-and-conditions')
  @Render('terms-and-conditions')
  termsAndConditions() {}

  // log out - GET
  @Get('logout')
  logout(@Res() res) {
    res.redirect('/');
  }
}
