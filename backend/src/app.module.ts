import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { WorkspacesModule } from './modules/workspaces/workspaces.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const options: TypeOrmModuleOptions = {
          type: config.get<any>('DB_TYPE'),
          host: config.get<any>('DB_HOST'),
          port: config.get<any>('DB_PORT'),
          database: config.get<any>('MYSQL_DATABASE'),
          username: config.get<any>('MYSQL_USER'),
          password: config.get<any>('MYSQL_PASSWORD'),
          entities: [__dirname + '/**/*.entity.{ts,js}'],
          autoLoadEntities: true,
          synchronize: true,
        };

        return options;
      },
    }),
    UsersModule,
    AuthModule,
    WorkspacesModule,
  ],
})
export class AppModule {}
