import { Injectable } from '@nestjs/common';
import { Car } from '../cars/car.helper';
import { TimeService } from '../time/time.service';
import { Time } from '../time/time.helper'

type Restrintion = {
  numbers: number[]
  day: number
}
@Injectable()
export class CarsService {
  restrictions: Restrintion[] = [
    {
      numbers: [1,2],
      day: 1
    },
    {
      numbers: [3,4],
      day: 2
    },
    {
      numbers: [5,6],
      day: 3
    },{
      numbers: [7,8],
      day: 4
    }
    ,{
      numbers: [9,0],
      day: 5
    }
  ]
  constructor(
    private readonly timeService:TimeService
  ){}

  async circulationLimitedInQuito(car:Car , date: Date, time: Time) {
    const lastDigitLicensePlate = parseInt(car.licensePlate.substr(car.licensePlate.length-1));
    const dayOfWeek = date.getUTCDay();
    const iswithinTimeRestrictionInterval = await this.timeService.isWithinTimeRestrictionInterval(time);
    if (!iswithinTimeRestrictionInterval) {
      return false;
    } else {
      console.log(date)
      console.log(dayOfWeek)
      switch (dayOfWeek) {
        case 6:
        case 7:
          return false;
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          return this.restrictions.find( restriction => restriction.day === dayOfWeek).numbers.find( restrictedNumber => restrictedNumber  === lastDigitLicensePlate) ? true : false
        default:
          return true;
      }
    }
  }
}
