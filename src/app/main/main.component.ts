import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent  {
  countdown: string;
  startVisible: boolean = true;
  currentEvent: string;
  constructor() {
    this.countdown = "05:00"; // Initial value set to 5 minutes
    this.currentEvent = "timer";
  }

  onStart() {
  }

  toggleDisplays(): void {
    this.startVisible = !this.startVisible;
  }

  
}

