import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit  {
  countdown: number;
  startVisible:boolean = true;
  intervalId:any;
  numberDisplay:string;
  constructor(private router:Router) {
    const storedTotalTime = localStorage.getItem('totalTime');  
    const storedShortBreakTime = localStorage.getItem('shortBreakTime');
    const storedLongBreakTime = localStorage.getItem('longBreakTime');
    const totalTime = storedTotalTime ? parseInt(storedTotalTime, 10) * 60 : 25*60;
    const shortBreakTime = storedShortBreakTime ? parseInt(storedShortBreakTime, 10) : 5;
    const longBreakTime = storedLongBreakTime ? parseInt(storedLongBreakTime, 10) : 10;
    this.countdown = totalTime;
    this.numberDisplay = storedTotalTime ? storedTotalTime: "25";
    this.numberDisplay = this.numberDisplay + ":00"
  }

  ngOnInit(): void {
  }

  onStart() { // This is ran when the start button is clicked
    this.intervalId = setInterval(() => this.counter(), 1000);
  }
  onStop() {
    this.intervalId = clearInterval(this.intervalId)
    console.log("Stop clicked");
  }
  counter() {
    this.countdown--;

    const minutes = Math.floor(this.countdown / 60);
    const seconds = this.countdown % 60;

    // Format the minutes and seconds as strings with leading zeros if needed
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes.toString();
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds.toString();

    // Update the display string
    this.numberDisplay = `${formattedMinutes}:${formattedSeconds}`;

    if (this.countdown === 0) {
      clearInterval(this.intervalId);
      console.log("Countdown reached 0");
      this.toggleDisplays()
    }
  }

  toggleDisplays(): void {
    this.startVisible = !this.startVisible;
  }

  onSettings() {
    this.router.navigate([`/settings`]);
  }

  onShortBreak() {
    const storedShortBreakTime = localStorage.getItem('shortBreakTime');
    const shortBreakTime = storedShortBreakTime ? parseInt(storedShortBreakTime, 10)*60 : 5*60;
    this.countdown = shortBreakTime;
    this.numberDisplay = storedShortBreakTime ? storedShortBreakTime: "5";
    this.numberDisplay = this.numberDisplay + ":00"
  }

  onLongBreak() {
    const storedLongBreakTime = localStorage.getItem('longBreakTime');
    const longBreakTime = storedLongBreakTime ? parseInt(storedLongBreakTime, 10) * 60 : 10*60;
    this.countdown = longBreakTime
    this.numberDisplay = storedLongBreakTime ? storedLongBreakTime: "10";
    this.numberDisplay = this.numberDisplay + ":00"
  }

  onTimerBreak() {
    const storedTotalTime = localStorage.getItem('totalTime'); 
    const totalTime = storedTotalTime ? parseInt(storedTotalTime, 10) * 60 : 25*60;
    this.countdown = totalTime;
    this.numberDisplay = storedTotalTime ? storedTotalTime: "25";
    this.numberDisplay = this.numberDisplay + ":00"
  }
 
}

