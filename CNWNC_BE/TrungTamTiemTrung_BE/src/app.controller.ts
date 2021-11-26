import { Controller, Get, Post, UseGuards,Put, Body, Param, Res  } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { NhanVienService } from './nhanvien/nhanvien.service';
import { RolesGuard } from './role/roles.guard';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
    private NhanVienService: NhanVienService
    ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('auth/login')
  async login(@Body() body) {
    return this.authService.login(body);
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Put('nhanvien/check')
  check(@Body() data) {
    return this.NhanVienService.updateCheckCode(data);
  }

  @Get('uploads:photo')
  serverImage(@Param('photo') photo, @Res() res): Promise<any> {
      return res.readFile(photo, { root: 'uploads' })
  }
}
