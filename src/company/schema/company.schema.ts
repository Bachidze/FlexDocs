import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Company {
  @Prop({ required: true })
  company_name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;


  @Prop({ required: true })
  country: string;

 @Prop({ required: true,enum:["finance","e-commerce","healthCare","ohter"] })
  industry: string;

  @Prop({default:false})
  isActive:boolean;
}

export const CompanySchema = SchemaFactory.createForClass(Company)
