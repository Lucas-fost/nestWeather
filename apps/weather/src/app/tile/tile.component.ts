import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { WeatherResp } from '@weather/api-interfaces';
import { City } from '@weather/api-interfaces';

@Component({
  selector: 'weather-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
})
export class TileComponent implements OnInit {
  currentWeather!: WeatherResp;
  @Input() currentCity!: City;
  weatherIcon = '';

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    console.log(this.currentCity);

    const long: number = this.currentCity.coord.lon;
    const lat: number = this.currentCity.coord.lat;

    this.api.getCurrent(long, lat).subscribe((res) => {
      this.currentWeather = res;
      this.weatherIcon = `https://openweathermap.org/img/wn/${res.current.weather[0].icon}@2x.png`;
    });
  }
}
