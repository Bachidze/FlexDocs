import { IsEmail, IsNotEmpty, MinLength, IsString, IsIn } from 'class-validator';

export class SignUpDTO {
  @IsNotEmpty()
  @IsString()
  company_name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(6) 
  password: string;

  @IsNotEmpty()
  @IsString()
  country: string;

  @IsNotEmpty()
  @IsIn(['finance', 'e-commerce', 'healthCare', 'other'])
  industry: string;
}
