import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Company } from './schema/company.schema';
import { Model } from 'mongoose';

@Injectable()
export class CompanyService {
  constructor(@InjectModel(Company.name) private companyModel:Model<Company>){}
async  create(createCompanyDto: CreateCompanyDto) {
  const company = await this.companyModel.create(createCompanyDto)
    return company
  }

async  findAll() {
    const findAll = await this.companyModel.find()
    return findAll
  }

async  findOne(id: string) {
  const company = await this.companyModel.findById(id)
    return company
  }

  async findOneByEmail(email:string){
    const company = await this.companyModel.findOne({email:email}).select("+password")
    return company
  }

async  update(id: string, updateCompanyDto: UpdateCompanyDto) {
  const updatedCompany = await this.companyModel.findByIdAndUpdate(id,updateCompanyDto,{new:true})
    return updatedCompany
  }

async  remove(id: string) {
  const deletedCompany = await this.companyModel.findByIdAndDelete(id)
    return deletedCompany
  }
}
