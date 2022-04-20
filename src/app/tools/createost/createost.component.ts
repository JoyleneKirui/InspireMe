import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/quote';


@Component({
  selector: 'app-createost',
  templateUrl: './createost.component.html',
  styleUrls: ['./createost.component.css']
})

export class CreateostComponent implements OnInit {
  newquote: any;
  
  
  constructor() { }

  ngOnInit(): void {
  }
   OnPost() {
    this.newquote = new Quote("",this.quote);
   }

   public author : string = '';
   public quote : string = '';

  valuechange() {
    console.log(this.author);
  }

}