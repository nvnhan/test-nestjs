import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

// CMD: nest g controller auth
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {
    // Khởi tạo Controller với biến authService
  }

  @Post('/hello')
  sayHello(@Body() body: any) {
    // Body nhận khi truyển lên kiểu form-urlencoded
    console.log(
      '🚀 ~ file: auth.controller.ts:10 ~ AuthController ~ sayHello ~ body:',
      body,
    );
    return this.authService.sayHello();
  }
}
