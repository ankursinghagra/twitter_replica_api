import { Controller, Get } from '@nestjs/common';

@Controller('register')
export class RegisterController {

    @Get()
    getHello(req,res): string {
        console.log('RegisterController Get() Called');
        return JSON.stringify({status: true, req: req, res: res});
    }
}
