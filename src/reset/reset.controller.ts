import { Body, Controller, Post } from '@nestjs/common';
import { ResetService } from './reset.service';

@Controller()
export class ResetController {
  constructor(private resetService: ResetService) {}

  @Post('forgot')
  async forgot(@Body('email') email: string) {
    const token = Math.random().toString(20).substr(2, 12);

    await this.resetService.create({ email, token });

    return { message: 'Success' };
  }
}
