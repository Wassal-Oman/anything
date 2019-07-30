import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '192.168.64.2',
  port: 3306,
  username: 'ghanim',
  password: 'Optimist_GM9',
  database: 'anything',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
