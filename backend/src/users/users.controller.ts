import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class UsersController {
    @Get()
    getHello(req,res): string {
        return JSON.stringify({status: true, req: req, res: res});
    }
}
