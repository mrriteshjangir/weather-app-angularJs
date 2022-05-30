import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app-angularJs';

  public text: string = "Hello";
  public caption: string = "Click Me!"; 

  places: string[] = ['bhandara','nagpur','gondia','pune','mumbai','goa'];

  private count:number = 0; 

  ngOnInit(): void {
  }

  change():any{
    this.caption = "Clicked!";
  }

  getCurrentTime(): any {
    return new Date(Date.now()).toLocaleTimeString("en-US");
  }

  getCurrentDate():any{
    return new Date(Date.now()).toLocaleDateString("en-US");
  }

  num = 0;
}
