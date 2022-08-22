import { Controller, Get, Post } from '@nestjs/common';

@Controller('/')
export class UsersController {

    @Post('user_info')
    info(req,res): string {
        console.log('/user_info/ Called');
        return JSON.stringify({status: true, req: req, res: res});
    }
}
