import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FetchDataService } from './fetchData.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ResolveTestComponent } from './resolveTest/resolveTest.component';

@NgModule({
  declarations: [AppComponent, ResolveTestComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [FetchDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
