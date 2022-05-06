import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RoleDto } from './dto/role.dto';
import { Role as RoleModel } from './models/role.model';
import { RoleService } from './role.service';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  create(@Body() dto: RoleDto): Promise<RoleModel> {
    return this.roleService.create(dto);
  }

  @Get()
  findAll() {
    return this.roleService.findAll();
  }

  @Get('/:value')
  findOneByValue(@Param('value') value: string) {
    return this.roleService.findOneByValue(value);
  }
}
