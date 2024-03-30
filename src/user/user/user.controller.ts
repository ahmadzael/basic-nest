import { Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('/api/users')
export class UserController {
    @Post()
    post(): string{
        return "POST";
    }

    @Get('/sample')
    get(): string{
        return "GET"
    }

    @Get('/hello')
    sayHello(@Query('name')name:string):string{
        return `Hello ${name || 'Guest'}`;
    }

    @Get('/:id')
    getById(@Param('id') id: string): string{
        return `GET ${id}`
    }

}

 