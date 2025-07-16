import { Injectable } from '@nestjs/common';

interface User {
    id: number;
    username: string;
    password: string;

}

@Injectable()
export class UsersService {
    private readonly users: Array<User> = [
        {
            id: 1,
            username: 'kaung',
            password: '123',
        },
        {
            id: 2,
            username: 'maria',
            password: 'guess',
        },
    ];

    async findOne(username: string): Promise<User | undefined> {
        return Promise.resolve(
            this.users.find((user) => user.username === username),
        );
    }


}
