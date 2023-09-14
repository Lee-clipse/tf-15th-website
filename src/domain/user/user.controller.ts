import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOperation, ApiTags, ApiBody, ApiQuery } from '@nestjs/swagger';
import { UserFormDto } from './dto/user_form.dto';
import { UserJoinDto } from './dto/user_join.dto';
import { UserScoreDto } from './dto/user_score.dto';

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
    return await this.userService.reconfirmQR(name, phoneNumber);
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
    return await this.userService.getUserInfo(userId);
  }

  // Join User
  @Post('/join')
  @ApiOperation({
    summary: '스텝이 사용자를 팀에 참가',
  })
  @ApiBody({ type: () => UserJoinDto })
  async joinTeam(@Body() userJoinDto: UserJoinDto) {
    return await this.userService.joinTeam(userJoinDto);
  }

  // Get User Team
  @Get('/team')
  @ApiOperation({
    summary: '사용자의 팀을 반환',
  })
  @ApiQuery({
    name: 'userId',
    type: 'string',
  })
  async getUserTeam(@Query('userId') userId: string) {
    return await this.userService.getUserTeam(userId);
  }

  // Get Team Info Of User
  @Get('/team-info')
  @ApiOperation({
    summary: '사용자의 팀 정보를 반환',
  })
  @ApiQuery({
    name: 'userId',
    type: 'string',
  })
  async getTeamInfoOfUser(@Query('userId') userId: string) {
    return await this.userService.getTeamInfoOfUser(userId);
  }

  // Plus User Score
  @Post('/plus')
  @ApiOperation({
    summary: '사용자 개인 점수 추가',
  })
  @ApiBody({ type: () => UserScoreDto })
  async plusUserScore(@Body() userScoreDto: UserScoreDto) {
    const { userId, score } = userScoreDto;
    return await this.userService.plusUserScore(userId, score);
  }

  // Get User Score`
  @Get('/score')
  @ApiOperation({
    summary: '사용자의 개인 점수를 반환',
  })
  @ApiQuery({
    name: 'userId',
    type: 'string',
  })
  async getUserScore(@Query('userId') userId: string) {
    return await this.userService.gertUserScore(userId);
  }
}
