import { Component, OnDestroy, OnInit } from '@angular/core';

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
  constructor() {
    this.countdown = 5;
    this.numberDisplay = "";
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
 
}

