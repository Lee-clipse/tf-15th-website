import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOperation, ApiTags, ApiBody, ApiQuery } from '@nestjs/swagger';
import { UserFormDto } from './dto/user_form.dto';
import { UserJoinDto } from './dto/user_join.dto';

@Controller('api/user')
@ApiTags('USER API')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Register User
  @Post('/register')
  @ApiOperation({
    summary: '사용자 접수 제출',
  })
  @ApiBody({ type: () => UserFormDto })
  registerUserForm(@Body() userForm: UserFormDto) {
    return this.userService.registerUser(userForm);
  }

  // Reconfirm QR
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

  // View User Info
  @Get('/info')
  @ApiOperation({
    summary: '사용자 정보 반환',
  })
  @ApiQuery({
    name: 'userId',
    type: 'string',
  })
  async getUserInfo(@Query('userId') userId: string) {
    return this.userService.getUserInfo(userId);
  }

  // Join User
  @Post('/join')
  @ApiOperation({
    summary: '스텝이 사용자를 팀에 참가',
  })
  @ApiBody({ type: () => UserJoinDto })
  async joinTeam(@Body() userJoinDto: UserJoinDto) {
    return this.userService.joinTeam(userJoinDto);
  }
}
