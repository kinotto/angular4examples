import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'home-app',
  templateUrl: './home.component.html',
  styles: [ `
    .beer_thumb {
      padding: 20px;
      transition: all .4s;
    }
    .beer_thumb:hover {
      transform: scale(1.1);
    }
  ` ]
})
export class HomeComponent implements OnInit {

  beers: any;

  constructor(private apiService: ApiService){}
  ngOnInit() {
    this.apiService.getBeers()
                   .subscribe(
                     result => this.beers = result,
                     errors => console.log(errors)
                    );
  }
}
