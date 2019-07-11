import { IsString, MinLength, MaxLength, Matches, IsEmail, IsNumberString, Length, IsIn, IsNotEmpty } from "class-validator";
import { UserType } from "../user-type.enum";

export class RegisterDto {

    @IsString()
    @MinLength(3)
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNumberString()
    @Length(8, 8)
    @IsNotEmpty()
    phone: string;

    @IsString()
    @IsNotEmpty()
    @IsIn([UserType.ADMIN, UserType.SHOP, UserType.SUPPLIER])
    type: UserType;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(20)
    password: string;
}