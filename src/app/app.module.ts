import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DynamicTemplateComponent } from './dynamicTemplate/dynamicTemplate.component';
import { UserDataService } from './dynamicTemplate/userData.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, DynamicTemplateComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [UserDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
