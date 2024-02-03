import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent  {
  countdown: string;
  startVisible: boolean = true;
  timeLength: any;
  minute: number;
  constructor() {
    this.countdown = ""; 
    const timeLengthStorage = localStorage.getItem("timeRemaining");
    this.timeLength = timeLengthStorage  ? JSON.parse(timeLengthStorage) : 5;
    this.minute = 5;
  }

  onStart() { // This is ran when the start button is clicked
    let seconds: number = this.minute * 60;
    let textSec: any = "0";
    let statSec: number = 60;

    const prefix = this.minute < 10 ? "0" : "";

    const timer = setInterval(() => {
      seconds--;
      if (statSec != 0) statSec--;
      else statSec = 59;

      if (statSec < 10) {
        textSec = "0" + statSec;
      } else textSec = statSec;

      this.countdown = `${prefix}${Math.floor(seconds / 60)}:${textSec}`;

      if (seconds == 0) {
        console.log("finished");
        clearInterval(timer);
      }
    }, 1000);
  }

  toggleDisplays(): void {
    this.startVisible = !this.startVisible;
  }
 
}

