import { Injectable } from '@nestjs/common';

@Injectable()
export class Time {
  time: string;

  constructor (time: string) {
    const timeRegex = new RegExp('^[0-9]{2}:[0-9]{2}');
      if (!timeRegex.test(time))
        throw new Error ('Time should have the form hh:mm. Example: 12:00');
      else
        this.time = time;
  }
}
