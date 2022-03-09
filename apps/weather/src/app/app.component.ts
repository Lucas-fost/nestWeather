import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { City } from '@weather/api-interfaces';

@Component({
  selector: 'weather-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  hello$ = null;
  location!: GeolocationPosition;

  currentList: City[] = [];

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((res) => {
      this.location = res
    }, (res) => {
      console.log(res)
    }, {timeout: 10000});

    this.api.getCurrentList().subscribe(list => {
      this.currentList = list;
    })
  }

  onChange(city: City): void {
    this.api.addCity(city)
    console.log(this.currentList)
  }


  constructor(private api: ApiService) {}
}
