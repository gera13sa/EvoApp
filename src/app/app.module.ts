import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResponseService } from './response.service';

@NgModule({
  declarations: [	
    AppComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [ResponseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
