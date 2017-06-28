import { OnInit, Component } from '@angular/core';

@Component({
  selector: 'my-component',
  templateUrl: './my-component.html',
  styles: [ `
    body{
      background-color: transparent;
    }
    p{
      font-size:14px;
    }
  `]
})
export class MyComponent implements OnInit {
  username: string;
  constructor(){}
  ngOnInit(){
    this.resetUsername();
  }
  resetUsername(){
    this.username = "";
  }
}
