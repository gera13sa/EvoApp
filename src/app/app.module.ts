import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { AppRoutingModule } from './app-routing.module';
import { BookService } from './book/book.service';

@NgModule({
  declarations: [	
    AppComponent, BookComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
