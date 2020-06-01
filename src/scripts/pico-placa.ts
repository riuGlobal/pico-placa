import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { CarsService } from '../cars/cars.service';
import { Car } from '../cars/car.helper';
import { Time } from '../time/time.helper'
import * as DateValidator from 'simpledatevalidator';

//  Validate presence of arguments

if (!(process.argv[2] && process.argv[3]  && process.argv[4])) {
  console.error('Missing parameters');
  console.error('Usage: npm run pico-placa <license-plate> <date(dd-mm-yyyy)> <time(hh:mm)>');
  console.error('Hint: License plate is three letters, and three or four digits. Example: PBW4307');
  process.exit(0);
}

async function toValidDate(date: string): Promise<Date> {
  if (DateValidator.isValidDate(date, "YYYY-MM-DD")) {
    return new Date(date); 
  } else {
    throw new Error('Invalid date. Valid date expected. Date should have valid format: yyyy-mm-dd');
  }
}

async function bootstrap() {
  try {
  const app = await NestFactory.create(AppModule);
  app.init();
  const carsService = app.get(CarsService);

  const car = new Car (process.argv[2]);
  const date: Date = await toValidDate(process.argv[3]);
  const time = new Time(process.argv[4]);
  const circulationLimited = await carsService.circulationLimitedInQuito(car, date, time);

  if (circulationLimited) {
    console.log(`No, a car with license plate : ${process.argv[2]} can not be on the road on ${process.argv[3]} at ${process.argv[4]}`)
  } else {
    console.log(`Yes, a car with license plate : ${process.argv[2]} can be on the road on ${process.argv[3]} at ${process.argv[4]}`)
  }

  process.exit(0);
  } catch (error) {
    console.error(error. message);
    process.exit(0);
  }
}
 
bootstrap();
