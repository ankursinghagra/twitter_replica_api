import { Controller, Get } from '@nestjs/common';

@Controller('login')
export class LoginController {

    @Get()
    getHello(req,res): string {
        console.log('LoginController Get() Called');
        return JSON.stringify({status: true, req: req, res: res});
    }
}

