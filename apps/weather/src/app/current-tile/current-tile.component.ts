import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { WeatherResp } from '@weather/api-interfaces';
import { ApiService } from '../api.service';

@Component({
  selector: 'weather-current-tile',
  templateUrl: './current-tile.component.html',
  styleUrls: ['./current-tile.component.scss']
})
export class CurrentTileComponent implements OnInit, OnChanges {
  @Input() loc!: GeolocationPosition;

  currentWeather!: WeatherResp;
  currentCity = {};
  weatherIcon = '';

  constructor(private api: ApiService) {}

  ngOnInit(): void {return}
  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['loc'].currentValue) {
      const long: number = changes['loc'].currentValue.coords.longitude;
      const lat: number = changes['loc'].currentValue.coords.latitude;

      this.api.getCurrent(long, lat).subscribe(res => {
        this.currentWeather = res;
        this.weatherIcon = `https://openweathermap.org/img/wn/${res.current.weather[0].icon}@2x.png`;
        console.log(this.currentWeather);
      })

      this.api.findNearest(long, lat).subscribe(res => {
        if(res[0]) {
          console.log(res[0]);
          this.currentCity = res[0].name;
        }
      })
    }
  }


}
