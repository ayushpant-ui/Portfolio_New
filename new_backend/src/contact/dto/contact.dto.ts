import {IsString, IsEmail, IsEnum, IsEmpty, MaxLength, MinLength, IsNotEmpty } from 'class-validator';

export class CreateContactDTO { 

  @IsString()
  @MinLength(2)
  @MaxLength(50)
  @IsNotEmpty()
  fullname! : string ;

  @IsEmail()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(100)
  email! : string ; 

  @IsString()
  subject!: string ; 

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(200)
  message! : string ; 
}