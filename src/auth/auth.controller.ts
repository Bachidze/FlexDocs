import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDTO } from './dto/signup.dto';
import { SignInDTO } from './dto/signIn.dto';
import { AuthGuard } from './auth.guard';
import { request } from 'http';
import { Company } from 'src/company/decorators/company.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }

  @Post("sign-up")
   signup(@Body() signUpDTO:SignUpDTO){
    return this.authService.signUp(signUpDTO)
   }

  @Post("sign-in")
   signIn(@Body() signInDTO:SignInDTO){
    return this.authService.signIn(signInDTO)
   }
   
   @UseGuards(AuthGuard)
   @Get("/current-user")
  async currentUser(@Company() userId){
    const catchUser = await this.authService.getCurrentUser(userId)
    return catchUser
   }
}
