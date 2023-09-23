import { Component } from '@angular/core';
import { Notify } from 'notiflix';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  alertsArray = [
    {
      type: "success", 
      text: 'Успех',
      tooltip: 'Вывести сообщение об успешной операции'
    }, 
    {
      type: "failure", 
      text: 'Неудача',
      tooltip: 'Вывести сообщение о неудачной операции'
    },
    {
      type: "info", 
      text: 'Информация',
      tooltip: 'Вывести информационное сообщение'
    }
  ];

  bsRangeValue: Date[];
  currentDate = new Date();

  buttonDisabled = false;

  bootstrapAlerts: {type: string, text: String, timeout: number}[] = [];

  notiflix_alert(alertType: String): void{
    switch(alertType){
      case "success":
        Notify.success('Operation succeeded!');
        break;
      case "failure":
        Notify.failure("Operation failed!");
        break;
     case "info":
        Notify.info("Important info!");
        break;
    };
  }

  check_date(): void{
    const startDate = dayjs(this.bsRangeValue[0]);
    const endDate = dayjs(this.bsRangeValue[1]);
    const daysDifference = endDate.diff(startDate, 'days');

    if(daysDifference > 7) {
      this.bootstrapAlerts.push({
        type: 'danger',
        text: `Размечтались, нельзя брать отпуск более 7 дней!`,
        timeout: 6000
      });
      return;
    }

    this.bootstrapAlerts.push({
      type: 'success',
      text: `Вы успешно взяли отпуск на ${daysDifference} дней!`,
      timeout: 0
    });
    this.buttonDisabled = true;
  }

  constructor() {
    var tempDate = new Date(this.currentDate);
    tempDate.setDate(tempDate.getDate() + 7);
    this.bsRangeValue = [new Date(), tempDate];
  }

}
