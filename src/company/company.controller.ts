import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { Company } from './decorators/company.decorator';
import { isAdmin } from 'src/auth/isAdmin.guard';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}


  @Get()
  findAll() {
    return this.companyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companyService.findOne(id);
  }
  @UseGuards(AuthGuard)
  @Patch()
  update(@Company() userId, @Body() updateCompanyDto: UpdateCompanyDto) {
    return this.companyService.update(userId, updateCompanyDto);
  }
 
  @UseGuards(AuthGuard)
  @Delete()
  remove(@Company() userId) {
    return this.companyService.remove(userId);
  }

  @Delete(":id")
  @UseGuards(AuthGuard,isAdmin)
  removeOtherCompany(@Param("id") id){
    return this.companyService.remove(id)
  }
}
