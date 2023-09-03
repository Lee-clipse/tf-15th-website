import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOperation, ApiTags, ApiBody, ApiQuery } from '@nestjs/swagger';
import { UserFormDto } from './dto/user_form.dto';

@Controller('api/user')
@ApiTags('USER API')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/register')
  @ApiOperation({
    summary: '사용자 접수 제출',
  })
  @ApiBody({ type: () => UserFormDto })
  registerUserForm(@Body() userForm: UserFormDto) {
    return this.userService.registerUser(userForm);
  }

  @Get('/reconfirm-qr')
  @ApiOperation({
    summary: '사용자 QR 재확인 요청',
  })
  @ApiQuery({
    name: 'name',
    type: 'string',
  })
  @ApiQuery({
    name: 'phoneNumber',
    type: 'string',
  })
  async reconfirmQR(
    @Query('name') name: string,
    @Query('phoneNumber') phoneNumber: string,
  ) {
    return this.userService.reconfirmQR(name, phoneNumber);
  }

  @Get('/info')
  @ApiOperation({
    summary: '사용자 정보 반환',
  })
  @ApiQuery({
    name: 'userId',
    type: 'string',
  })
  async getUserInfo(@Query('userId') userId: string) {
    console.log(userId);
    return this.userService.getUserInfo(userId);
  }
}
