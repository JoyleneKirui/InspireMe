import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { CreateostComponent } from './tools/createost/createost.component';
import { MatCardModule } from '@angular/material/card';
import { PostComponent } from './tools/post/post.component';
import { FormsModule } from '@angular/forms';
import { MyQuoteDisplayComponent } from './my-quote-display/my-quote-display.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateostComponent,
    PostComponent,
    MyQuoteDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AppRoutingModule,
    MatDialogModule,
    MatIconModule,
    MatCardModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
