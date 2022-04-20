import { Component, OnInit } from '@angular/core';
import { CreateostComponent } from '../createost/createost.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
  
})
export class PostComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  onCreatePostClick(){
    this.dialog.open(CreateostComponent);
  }
}
