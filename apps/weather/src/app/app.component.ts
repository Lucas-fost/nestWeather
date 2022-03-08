import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from '@weather/api-interfaces';

@Component({
  selector: 'weather-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // hello$ = this.http.get<City[]>('/api/cities');
  hello$ = null;
  location!: GeolocationPosition;

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((res) => {
      console.log(res)
      this.location = res
    }, (res) => {
      console.log(res)
    }, {timeout: 10000});
  }

  constructor(private http: HttpClient) {}
}
