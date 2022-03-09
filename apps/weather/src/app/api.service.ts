import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City, WeatherResp } from '@weather/api-interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  list: City[] = [];

  findNearest(long: number, lat: number): Observable<any> {
    return this.http.get(`api/cities/${long}/${lat}`)
  }

  getCities(): Observable<City[]> {
    return this.http.get<City[]>('/api/cities');
  }

  getCurrent(long: number, lat: number): Observable<WeatherResp> {
    return this.http.get<WeatherResp>(`/api/weather/${long}/${lat}`)
  }

  getCurrentList(): Observable<City[]> {
    return of(this.list);
  }

  addCity(city: City): void {
    if(this.list.find(town => town.name === city.name)) {
      this.list.splice(this.list.indexOf(city), 1)
    } else {
      this.list.push(city)
    }
  }
}
