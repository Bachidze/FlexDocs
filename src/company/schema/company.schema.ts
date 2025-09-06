import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

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
}

export const CompanySchema = SchemaFactory.createForClass(Company)
