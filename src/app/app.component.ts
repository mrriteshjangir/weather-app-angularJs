import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app-angularJs';

  public text: string = "Hello";
  public caption: string = "Click Me!";
  num: number = 0;
  randomNums: number[] = [3, 6, 7, 8, 1, 122, 44, 67, 790];

  // angular:string[] = ['https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png','Angular','Developed by Google','Visit Now'];

  // react:string[] = ['https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/220px-React-icon.svg.png','React','Developed by FB','Get Now'];

  // places : string[][] = [this.angular,this.react]

  private count:number = 0; 

  ngOnInit(): void {
  }

  getCurrentTime(): any {
    return Date.now();
  }
}
