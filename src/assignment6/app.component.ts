import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    input {
      margin-top: 10px;
    }
    input.ng-touched.ng-invalid {
      border-color: red;
    }
    label {
      font-size: 12px;
    }
  `]
})
export class AppComponent {
  @ViewChild("f") f: ElementRef;

  onSubmit(){
    console.log(this.f);
  }
}
