import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OpenWeatherService } from './open-weather/open-weather.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [AppService, OpenWeatherService],
})
export class AppModule {}
