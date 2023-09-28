import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterService } from './counter.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [CounterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
