import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) {}

    async signIn(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne(username);

        if (!user) {
            throw new UnauthorizedException('User not found');
        }

        if (user.password !== pass) {
            throw new UnauthorizedException('Invalid password');
        }

        if (!user.id) {
            throw new UnauthorizedException('User has no valid ID');
        }

        const payload = { sub: user.id, username: user.username };
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }

}
