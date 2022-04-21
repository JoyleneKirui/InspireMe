import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InspireMe';
  
   
}
export interface user {
Quote: string;
Author: string;
}

columnsToDisplay: string[] = ["Quote", "Author"];

public USER_DATA: user[] = []

public newUser = {Quote: "A commit a day keeps poverty away", Author: "Joylene"};
