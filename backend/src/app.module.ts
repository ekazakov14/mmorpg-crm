import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { WorkspacesModule } from './modules/workspaces/workspaces.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: async () => ({
        ...getConnectionOptions(),
        autoLoadEntities: true,
      }),
    }),
    UsersModule,
    AuthModule,
    WorkspacesModule,
  ],
  providers: [AppService],
})
export class AppModule {}
