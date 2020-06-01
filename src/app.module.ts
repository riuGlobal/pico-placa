import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsService } from './cars/cars.service';
import { TimeService } from './time/time.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, CarsService, TimeService],
})
export class AppModule {}
