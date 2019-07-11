import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AppService {
    // inject objects
    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository
    ) {}

    async signUp(registerDto: RegisterDto): Promise<{ statusCode: number, message: string }> {
        return this.userRepository.signUp(registerDto);
    }

    async signIn(loginDto: LoginDto): Promise<{ statusCode: number, message: string, data?: any}> {
        return this.userRepository.validateUserPassword(loginDto);
    }
}