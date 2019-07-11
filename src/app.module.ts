import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { AppService } from './app.service';
import { UserRepository } from './user.repository';
import { ShopController } from './shop/shop.controller';
import { ShopModule } from './shop/shop.module';
import { AdminController } from './admin/admin.controller';
import { AdminModule } from './admin/admin.module';
import { SupplierService } from './supplier/supplier.service';
import { SupplierController } from './supplier/supplier.controller';
import { SupplierModule } from './supplier/supplier.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([UserRepository]),
    ShopModule,
    AdminModule,
    SupplierModule,
  ],
  controllers: [AppController, ShopController, AdminController, SupplierController],
  providers: [
    AppService,
    SupplierService
  ],
})
export class AppModule {}
