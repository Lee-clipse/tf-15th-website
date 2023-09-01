import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOperation, ApiTags, ApiBody } from '@nestjs/swagger';
import { UserFormDto } from './dto/user_form.dto';

@Controller('user')
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
}
