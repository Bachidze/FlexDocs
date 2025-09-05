import { BadRequestException, Injectable } from '@nestjs/common';
import { SignUpDTO } from './dto/signup.dto';
import { CompanyService } from 'src/company/company.service';
import * as bcrypt from 'bcrypt';
import { SignInDTO } from './dto/signIn.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private companyService: CompanyService,private jwtService:JwtService) {}

  async signUp(signUpDTO: SignUpDTO) {
    const exsisting = await this.companyService.findOneByEmail(
      signUpDTO.email,
    );
    if (exsisting) throw new BadRequestException('email already exsists');
    const hashedPass = await bcrypt.hash(signUpDTO.password, 10);
    await this.companyService.create({ ...signUpDTO, password: hashedPass });
    return {
      message: 'Company created Successfully',
      greeting: 'Welcome to FlexDocs',
    };

}

async signIn (signInDto:SignInDTO){
     const exsisting = await this.companyService.findOneByEmail(signInDto.email);
        if(!exsisting) throw new BadRequestException("email or password is incorrect")

        const isPassEqual = await bcrypt.compare(signInDto.password,exsisting.password)
           if(!isPassEqual) throw new BadRequestException("email or password is incorrect")

            const payLoad = {
                userId:exsisting._id
            }

            const accessToken  = this.jwtService.sign(payLoad,{expiresIn:"1h"})

            return {accessToken}
}

}
