import {Request, Response} from 'express';
import createUser from './services/CreateUser';

export function showUser(request: Request, response: Response) {
    const user = createUser({
        name: 'Thiago',
        email: 'roblesthiago38@gmail.com',
        pass: '123',
        techs: ['Node', 'React', {
            title: 'Javascript',
            exp: 100
        }],
    });

    return response.json({user});
}