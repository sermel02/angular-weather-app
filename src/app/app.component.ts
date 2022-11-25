// import { Weather } from './models/weather';
import { WeatherService } from './services/weather.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, timer } from 'rxjs';
import { Time } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {


  weather!: any;
  weatherSubscription!: Subscription;
  time!: Date;


  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherSubscription = this.weatherService.getWeatherData().subscribe(data => {
      console.log(data);
      this.weather = data
      
    });
    
    this.time = new Date();

    timer(0, 1000).subscribe(() => {
      this.time = new Date();
    })
  }

  logData() {
    console.log(this.time);
  }

  ngOnDestroy(): void {
    if(this.weatherSubscription) this.weatherSubscription.unsubscribe()
  }
}


