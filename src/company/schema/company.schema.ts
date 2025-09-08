import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Role } from 'src/enums/company.enum';

@Schema({ timestamps: true })
export class Company {
  @Prop({ required: true })
  company_name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true,select:false })
  password: string;


  @Prop({ required: true })
  country: string;

 @Prop({ required: true,enum:["finance","e-commerce","healthCare","other"] })
  industry: string;

  @Prop({default:false})
  isActive:boolean;

  @Prop({default:Role.user})
  role:string
}

export const CompanySchema = SchemaFactory.createForClass(Company)
