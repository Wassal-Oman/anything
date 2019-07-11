import { Repository, EntityRepository } from "typeorm";
import { InternalServerErrorException, ConflictException } from "@nestjs/common";
import * as bcrypt from 'bcrypt';
import { User } from "./user.entity";
import { RegisterDto } from "./dto/register.dto";
import { LoginDto } from "./dto/login.dto";

@EntityRepository(User)
export class UserRepository extends Repository<User> {

    async signUp(registerDto: RegisterDto): Promise<{ statusCode: number, message: string }> {
        // extract data from dto
        const { name, email, phone, type, password } = registerDto;

        // create a new user
        const user = new User();
        user.name = name;
        user.email = email;
        user.phone = phone;
        user.type = type;
        user.salt = await bcrypt.genSalt();
        user.password = await this.hashPassword(password, user.salt);

        // store user
        try {
            await user.save();

            return {
                statusCode: 201,
                message: "New user registered"
            }
        } catch (error) {
            if (error.code === '23505') {
                throw new ConflictException('User already exists');
            } else {
                throw new InternalServerErrorException();
            }
        }
    }

    async validateUserPassword(loginDto: LoginDto): Promise<{ statusCode: number, message: string, data?: any}> {
        // extract data from dto
        const { email, password } = loginDto;

        // find user from database by email
        const user = await this.findOne({ email });

        // check for user
        if(user && await user.validatePassword(password)) {
            return {
                statusCode: 200,
                message: `Welcome ${user.name}`,
                data: user
            };
        } else {
            return {
                statusCode: 401,
                message: 'Invalid Credentails'
            };
        }
    }

    async hashPassword(password: string, salt: string): Promise<string> {
        return bcrypt.hash(password, salt);
    }
}