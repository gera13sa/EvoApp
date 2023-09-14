import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddFivePipe } from './pipes/add-five.pipe';

@NgModule({
  declarations: [	
    AppComponent,
    AddFivePipe
   ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
