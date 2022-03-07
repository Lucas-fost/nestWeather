import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';

@Injectable()
export class OpenWeatherService {
  private baseUrlOneCall = 'https://api.openweathermap.org/data/2.5/onecall?units=metric&';
  private baseUrlCurrent = 'api.openweathermap.org/data/2.5/units=metric&weather?id='

  constructor(private http: HttpService) {}

  getLocation(long: string, lat: string): Observable<AxiosResponse> {
    return this.http.get(`${this.baseUrlCurrent}lat=${lat}&lon=${long}&appid=XXXXXXXX`)
  }

  getCity(id: string): Observable<AxiosResponse> {
    return this.http.get(`${this.baseUrlOneCall + id}&appid=XXXXXXXX`)
  }
}
