import { Controller, Get, Post } from '@nestjs/common';

@Controller('login')
export class LoginController {

	@Get('register')
    register(req,res): string {
        console.log('/register/ Called');
        return JSON.stringify({status: true, req: req, res: res});
    }

    @Get('login')
    login(req,res): string {
        console.log('/login/ Called');
        return JSON.stringify({status: true, req: req, res: res});
    }
}
