import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entity/user.entity';
import { UserFormDto } from './dto/user_form.dto';
import * as md5 from 'md5';
import { TeamService } from '../team/team.service';
import { UserJoinDto } from './dto/user_join.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    private readonly teamService: TeamService,
  ) {}

  TEAM_MAX_COUNT = 5;

  // Register User
  registerUser(userForm: UserFormDto) {
    // 이름 + 번호 뒷 4자리 => HASH
    const identifier = userForm.name + userForm.phoneNumber.slice(-4);
    const userId = md5(identifier).toString();
    this.userRepository.save({
      id: userId,
      ...userForm,
      teamId: '-',
      score: 0,
    });
    return { code: 200, userId };
  }

  // Reconfirm QR
  async reconfirmQR(name: string, phoneNumber: string) {
    const identifier = name + phoneNumber;
    const userId = md5(identifier).toString();
    const userExist = await this.getUserRow(userId);
    if (userExist === null) {
      return { code: 404, message: 'Undefined User' };
    }
    return { code: 200, userId };
  }

  // View User Info
  async getUserInfo(userId: string) {
    const userInfo = await this.getUserRow(userId);
    if (userInfo === null) {
      return { code: 404, message: 'Undefined User' };
    }

    // 현재 정원 미달 팀들의 정보
    const teamList = await this.teamService.getWaitingTeam();
    return { code: 200, userInfo, teamList };
  }

  // Join User
  async joinTeam(userJoinDto: UserJoinDto) {
    const { userId, teamId } = userJoinDto;

    const userRow = await this.getUserRow(userId);
    if (userRow === null) {
      return { code: 404, message: 'Undefined User' };
    }

    // 이미 해당 팀에 소속된 참가자인 경우 (스텝의 미스 클릭)
    const currTeamId = userRow.teamId;
    if (currTeamId === teamId) {
      return { code: 202, message: 'Already Join Same Team' };
    }

    // 팀 정원이 다 찬 경우 (스텝의 미스 클릭)
    const teamRow = await this.teamService.getTeamRow(teamId);
    const currTeamCount = Number(teamRow.count);
    if (currTeamCount >= this.TEAM_MAX_COUNT) {
      return { code: 202, message: 'Full Team Count' };
    }

    // 등록
    this.userRepository.update(userId, { teamId: teamId });
    const count = await this.teamService.plusTeamCount(teamId);
    return { code: 200, teamId, count };
  }

  // Get User Team
  async getUserTeam(userId: string) {
    const userRow = await this.getUserRow(userId);
    if (userRow === null) {
      return { code: 404, message: 'Undefined User' };
    }
    return { code: 200, teamId: userRow.teamId };
  }

  async getUserRow(userId: string) {
    return await this.userRepository
      .createQueryBuilder('user')
      .where('user.user_id = :userId', { userId })
      .getOne();
  }
}
