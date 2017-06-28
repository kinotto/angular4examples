import { Injectable } from '@angular/core';
import { UserService } from './user.service';

//used as stateless instance
@Injectable()
export class CounterService {
  subscription: any;
  constructor(private userService: UserService){
    this.subscription = this.userService.subscribe( (evt) => {
      console.log('active/inactive op logged');
    })
  }

  unsubscribe(){
    this.subscription.unsubscribe();
  }
}
