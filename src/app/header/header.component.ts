import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'header',
  template: `
    <nav *ngIf="prevLocation" class="navbar navbar-default">
      <div class="container-fluid">
        <a class="navbar-brand" (click)="location.back()" style="cursor: pointer">Back</a>
      </div>
    </nav>
  `
})

export class HeaderComponent {
  location: Location;
  prevLocation: any;
  constructor(location: Location){
    this.location = location;
    this.prevLocation = history.length;
  }
}
