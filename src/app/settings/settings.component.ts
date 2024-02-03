import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  totalTime: number = 60;
  shortBreakTime: number = 5;
  longBreakTime: number = 15;
  autostart: boolean = true;
  notifications: boolean = true;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onBack() {
    localStorage.setItem('totalTime', this.totalTime.toString());
    localStorage.setItem('shortBreakTime', this.shortBreakTime.toString());
    localStorage.setItem('longBreakTime', this.longBreakTime.toString());
    this.router.navigate([`/main`]);
  }
}
