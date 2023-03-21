import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDTO } from './dto';

// CMD: nest g controller auth
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {
    // Khởi tạo Controller với biến authService
  }

  @Post('/hello')
  sayHello(@Body() body: any) {
    // Body nhận khi truyển lên kiểu form-urlencoded
    const data = { ...body, welcome: this.authService.sayHello() };
    return data;
  }

  @Post('/register')
  register(@Body() body: RegisterDTO) {
    return { ...body, success: 1 };
  }
}
