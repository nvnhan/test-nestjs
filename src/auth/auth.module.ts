import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

// Khai báo các controllers và các providers
@Module({
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
