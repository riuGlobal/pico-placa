import { Injectable } from '@nestjs/common';
import * as flatTime from '@flat/time';

@Injectable()
export class Time {
  time: string;

  constructor (time: string) {
    const timeRegex = new RegExp('^[0-9]{2}:[0-9]{2}');
      if (timeRegex.test(time) && flatTime.isValid(time)) {
        this.time = time;
      }
      else {
        throw new Error ('Invalid time. Valid time expected. Time should be a valid time and  have the form hh:mm. Example: 12:00');
      }
  }
}
