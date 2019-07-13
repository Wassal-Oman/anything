import { IsString, MinLength, MaxLength, Matches, IsEmail } from "class-validator";

export class LoginDto {

    @IsEmail()
    email: string;

    @IsString()
    @MinLength(6)
    @MaxLength(20)
    @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, { message: "Password too weak" })
    password: string;
}