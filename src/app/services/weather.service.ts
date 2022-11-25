import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url: string = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=Chisinau,md&appid=0929fba275b73413742c15233a9559cf';

  constructor(private http: HttpClient) { }

  getWeatherData() {
    return this.http.get(this.url)
  }
}
