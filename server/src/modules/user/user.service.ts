import { Inject, Injectable } from '@nestjs/common';
import { USER_REPOSITORY } from 'src/core/constants';
import { UserDto } from './dto/user.dto';
import { User } from './models/user.model';

@Injectable()
export class UserService {
  constructor(@Inject(USER_REPOSITORY) private readonly userRepository: typeof User) {}

  async create(dto: UserDto): Promise<User> {
    return await this.userRepository.create<User>(dto);
  }

  async findOneByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { email }, include: { all: true } });
  }

  async findOneById(id: number): Promise<User> {
    return await this.userRepository.findOne<User>({ where: { id }, include: { all: true } });
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.findAll<User>({
      attributes: { exclude: ['password'] },
      include: { all: true },
    });
  }
}
