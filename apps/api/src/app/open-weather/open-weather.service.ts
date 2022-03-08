import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class OpenWeatherService {
  private baseUrlOneCall = 'https://api.openweathermap.org/data/2.5/onecall?units=metric&';
  private baseUrlCurrent = 'https://api.openweathermap.org/data/2.5/units=metric&weather?id=';
  private readonly api = environment.OPEN_WEATHER;
  
  constructor(private http: HttpService) {}

  getLocation(long: string, lat: string): Observable<AxiosResponse> {
    console.log(this.api)
    return this.http.get(`${this.baseUrlOneCall}lat=${lat}&lon=${long}&appid=${this.api}`);
  }

  getCity(id: string): Observable<AxiosResponse> {
    return this.http.get(`${this.baseUrlOneCall + id}&appid=${this.api}`);
  }
}
