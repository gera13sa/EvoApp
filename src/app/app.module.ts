import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddFivePipe } from './pipes/add-five.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [	
    AppComponent,
    AddFivePipe
   ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
