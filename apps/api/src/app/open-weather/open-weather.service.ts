import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class OpenWeatherService {
  private baseUrlOneCall = 'https://api.openweathermap.org/data/2.5/onecall?units=metric&';
  private baseUrlLoc = 'http://api.openweathermap.org/geo/1.0/reverse?';
  private readonly api = environment.OPEN_WEATHER;
  
  constructor(private http: HttpService) {}

  getLocation(long: string, lat: string): Observable<AxiosResponse> {
    return this.http.get(`${this.baseUrlOneCall}lat=${lat}&lon=${long}&appid=${this.api}`);
  }

  getCity(id: string): Observable<AxiosResponse> {
    return this.http.get(`${this.baseUrlOneCall + id}&appid=${this.api}`);
  }

  getCityFromLocation(long: string, lat: string): Observable<AxiosResponse> {
    return this.http.get(`${this.baseUrlLoc}&lat=${lat}&lon=${long}&limit=1&appid=${this.api}`);
  }
}
