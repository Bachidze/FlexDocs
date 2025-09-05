import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDTO } from './dto/signup.dto';
import { SignInDTO } from './dto/signIn.dto';

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
}
