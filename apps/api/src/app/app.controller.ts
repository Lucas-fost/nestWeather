import { Controller, Get, Param, Res } from '@nestjs/common';
import { Message, City } from '@weather/api-interfaces';
import { AppService } from './app.service';
import { OpenWeatherService } from './open-weather/open-weather.service';



@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private weatherService: OpenWeatherService) {}

  @Get('hello')
  getData(): Message {
    return this.appService.getData();
  }
  
  @Get('cities')
  getCities(): City[] {
    return this.appService.getCities()
  }
  
  @Get('cities/:id')
  getCityData(@Param() params): City {
    return this.appService.getCity(params.id)
  }
  
  @Get('weather/:long/:lat')
  getCurrent(@Res() res, @Param() params): void {
    this.weatherService.getLocation(params.long, params.lat).subscribe(weather => {
      console.log(weather.data)
      if(weather) res.send(weather.data);
    })
  }
  
  @Get('weather/:id')
  getCity(@Res() res, @Param() params): void {
    this.weatherService.getCity(params.id).subscribe(weather => {
      console.log(weather)
      if(weather) res.json(weather);
    })
  }
}
