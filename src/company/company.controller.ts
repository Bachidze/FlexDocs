import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}


  @Get()
  @UseGuards(AuthGuard)
  findAll() {
    return this.companyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companyService.findOne(id);
  }
  @UseGuards(AuthGuard)
  @Patch()
  update(@Req() request, @Body() updateCompanyDto: UpdateCompanyDto) {
     const userId = request.userId
    return this.companyService.update(userId, updateCompanyDto);
  }

  @UseGuards(AuthGuard)
  @Delete()
  remove(@Req() request) {
    const userId = request.userId
    return this.companyService.remove(userId);
  }
}
