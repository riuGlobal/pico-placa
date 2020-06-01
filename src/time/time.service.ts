import { Injectable } from '@nestjs/common';
import { Time } from './time.helper'

type RestrictedInterval = {
  hourStart: number
  minutesStart: number,
  hourEnd: number
  minutesEnd: number
}
@Injectable()
export class TimeService {
  restrictedIntervals: RestrictedInterval[] = [
    {
      hourStart: 7,
      minutesStart: 0,
      hourEnd: 9,
      minutesEnd: 30
    },
    {
      hourStart: 16,
      minutesStart: 0,
      hourEnd: 19,
      minutesEnd: 30
    },
  ]
  async isWithinTimeRestrictionInterval(time: Time): Promise<boolean> {
    let isWithinInterval = false;
    this.restrictedIntervals.forEach(interval => {
      if (( interval.hourStart * 60 + interval.minutesStart <= time.hour * 60 + time.minutes &&
        time.hour * 60 + time.minutes <= interval.hourEnd * 60 + interval.minutesEnd        
      )) {
        isWithinInterval = true;
      }      
    });
    return isWithinInterval;
  }
}
