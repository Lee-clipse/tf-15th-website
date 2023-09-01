import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entity/user.entity';
import { UserFormDto } from './dto/user_form.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}
  registerUser(userForm: UserFormDto) {
    const userId = uuidv4();
    this.userRepository.save({
      id: userId,
      ...userForm,
      teamId: 0,
      score: 0,
    });
    return { res: 200, userId };
  }
}
