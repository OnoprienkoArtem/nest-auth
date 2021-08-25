import { Controller, Post } from '@nestjs/common';

@Controller()
export class AuthController {
  @Post('register')
  register() {
    return 'this register route post';
  }
}
