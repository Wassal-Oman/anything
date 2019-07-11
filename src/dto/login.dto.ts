import { IsString, MinLength, MaxLength, Matches, IsEmail } from "class-validator";

export class LoginDto {

    @IsEmail()
    email: string;

    @IsString()
    @MinLength(6)
    @MaxLength(20)
    password: string;
}