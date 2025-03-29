import { Controller, Get, Post } from '@nestjs/common';

@Controller('cars')
export class CarsController {
  constructor() {}

  @Get()
  getCarsAll() {
    return 'Todos los Carros';
  }

  @Post()
  createCar() {
    return 'Crear un carro';
  }
}
