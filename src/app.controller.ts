import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { Person } from './person.interface';

@Controller("persons")
export class AppController {
  constructor(private readonly appService: AppService) {}
 
  @Get()
  getPessoas(): Person[] {
    return this.appService.findAll();
  }

  @Get(':id')
  getPessoaById(@Param('id') id: number): Person {
    return this.appService.findById(Number(id));
  }

  @Post()
  addPessoa(@Body('name') name: string, @Body('age') age: number): Person {
    return this.appService.save(name, age);
  }

  @Put(':id')
  updatePessoa(
    @Param('id') id: number,
    @Body('name') name: string,
    @Body('age') age: number
  ): Person {
    return this.appService.update(Number(id), name, age);
  }

  @Delete(':id')
  deletePessoa(@Param('id') id: number): void {
    this.appService.delete(Number(id));
  }

  @Get("message")
  getHello(): string {
    return this.appService.init();
  }
}
