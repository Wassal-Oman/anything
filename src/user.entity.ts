import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Unique, OneToMany } from "typeorm";
import * as bcrypt from 'bcrypt';
import { UserType } from "./user-type.enum";

@Entity()
@Unique(['email', 'phone'])
export class User extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    type: UserType;

    @Column()
    password: string;

    @Column()
    salt: string;

    async validatePassword(password: string): Promise<boolean> {
        const hash = await bcrypt.hash(password, this.salt);
        return hash === this.password;
    }
}