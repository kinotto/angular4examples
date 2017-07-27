import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'beer',
  templateUrl: './beer.component.html',
  styles: [ `
    .beer_img {
      width: 100px;
      padding-left: 10px;
    }
   `]
})

export class BeerComponent implements OnInit {
  beer: any;
  constructor(private route: ActivatedRoute, private apiService: ApiService){}
  ngOnInit() {
    this.route.params.subscribe( params => {
      this.apiService.getBeers().subscribe(
        beers => {
          this.beer = beers.filter( (beer) => {return beer.id == params.id})[0];
        },
        error => console.log(error)
      )
    })
  }

  ingredients() {
    return Object.keys(this.beer.ingredients);
  }
}
