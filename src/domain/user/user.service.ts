import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entity/user.entity';
import { UserFormDto } from './dto/user_form.dto';
import * as md5 from 'md5';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}
  registerUser(userForm: UserFormDto) {
    // 이름 + 번호 뒷 4자리 => HASH
    const identifier = userForm.name + userForm.phoneNumber.slice(-4);
    const userId = md5(identifier).toString();
    this.userRepository.save({
      id: userId,
      ...userForm,
      teamId: 0,
      score: 0,
    });
    return { res: 200, userId };
  }
}
