import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BooksService } from './books.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [	
    AppComponent
   ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
