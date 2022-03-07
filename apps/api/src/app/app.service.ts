import { Injectable } from '@nestjs/common';
import { City, Message } from '@weather/api-interfaces';
import * as cities from '../assets/cities.json'

@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }

  getCity(id: string): City {
    return cities.find(city => city.id === Number(id))
  }
  
  getCities(): City[] {
    return cities.sort((a, b) => (a.name < b.name) ? -1 : 1);
  }
}
