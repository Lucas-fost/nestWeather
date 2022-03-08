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

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    console.log(this.loc);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['loc'].currentValue) {
      console.log(changes['loc'].currentValue.coords);
      const long: number = changes['loc'].currentValue.coords.longitude;
      const lat: number = changes['loc'].currentValue.coords.latitude;
      this.api.getCurrent(long, lat).subscribe(res => {
        this.currentWeather = res;
        console.log(this.currentWeather);
      })
    }
  }


}
