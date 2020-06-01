import { Injectable } from '@nestjs/common';
import { Time } from './time.helper'
@Injectable()
export class TimeService {
  async isWithinTimeRestrictionInterval(time: Time): Promise<boolean> {
    return true;
  }
}
