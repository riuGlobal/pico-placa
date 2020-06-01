import { Injectable } from '@nestjs/common';
import { Car } from '../cars/car.helper';
import { TimeService } from '../time/time.service';
import { Time } from '../time/time.helper'

@Injectable()
export class CarsService {
  constructor(
    private readonly timeService:TimeService
  ){}

  async circulationLimitedInQuito(car:Car , date: Date, time: Time) {
    return true;      
  }
}
