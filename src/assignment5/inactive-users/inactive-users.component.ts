import { Component, EventEmitter, Input, Output, OnInit,OnDestroy } from '@angular/core';
import { UserService } from '../user.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
  providers: [CounterService]
})
export class InactiveUsersComponent implements OnInit, OnDestroy{
  users: string[];

  constructor(private userService: UserService, private counterService: CounterService){}
  subscription: any;

  ngOnInit() {
    this.users = this.userService.getInactiveUsers();
    this.subscription = this.userService.subscribe( (evt) => {
      this.users = evt.inactive;
    })
  }
  onSetToActive(id: number) {
    this.userService.setActive(id);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
    this.counterService.unsubscribe();
  }
}
