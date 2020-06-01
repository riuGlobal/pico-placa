export class Car {
  licensePlate: string;
  constructor(licensePlate: string) {
      const licensePlateRegex = new RegExp('^[a-zA-Z]{3}[0-9]{3,4}');
      if (!licensePlateRegex.test(licensePlate)) {
        throw new Error ('License plate should be three letters and four numbers. Example: PBW4307');
      }
      else {
        this.licensePlate = licensePlate;
      }
  }
}
