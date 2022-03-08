import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City, WeatherResp } from '@weather/api-interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  findNearest(): void {
    return;
  }

  getCities(): Observable<City[]> {
    return this.http.get<City[]>('/api/cities');
  }

  getCurrent(long: number, lat: number): Observable<WeatherResp> {
    return this.http.get<WeatherResp>(`/api/weather/${long}/${lat}`)
  }
}
