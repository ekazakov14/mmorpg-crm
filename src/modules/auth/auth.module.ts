import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/JwtAuthGuard';
import { JwtAuthStrategy } from './guards/JwtAuthStrategy';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UsersModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET'),
        signOptions: {
          expiresIn: '30d',
        },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [JwtAuthGuard, JwtAuthStrategy, AuthService],
})
export class AuthModule {}
