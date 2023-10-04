import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DynamicTemplateComponent } from './dynamicTemplate/dynamicTemplate.component';
import { UserDataService } from './dynamicTemplate/userData.service';

@NgModule({
  declarations: [AppComponent, DynamicTemplateComponent],
  imports: [BrowserModule],
  providers: [UserDataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
