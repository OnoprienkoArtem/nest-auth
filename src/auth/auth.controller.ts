import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dto/register.dto';

@Controller()
export class AuthController {
  constructor(
    private authService: AuthService,
    private jwtService: JwtService,
  ) {}

  @Post('register')
  async register(@Body() body: RegisterDto) {
    if (body.password !== body.password_confirm) {
      throw new BadRequestException('Password does not match.');
    }

    body.password = await bcrypt.hash(body.password, 12);

    return this.authService.create(body);
  }

  @Post('login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    const user = await this.authService.findOneBy({ email });

    if (!user) {
      throw new BadRequestException('Email does not exist.');
    }

    if (!(await bcrypt.compare(password, user.password))) {
      throw new BadRequestException('Invalid credentials.');
    }

    return { user };
  }
}
