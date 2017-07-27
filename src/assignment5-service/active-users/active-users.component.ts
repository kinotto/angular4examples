import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../user.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
  providers: [CounterService]
})
export class ActiveUsersComponent implements OnInit, OnDestroy{
  users: string[];
  subscription: any;
  constructor(private userService: UserService, private counterService: CounterService){}

  ngOnInit() {
    this.users = this.userService.getActiveUsers();
    this.userService.subscribe( (evt) => {
      this.users = evt.active;
    })
  }
  onSetToInactive(id: number) {
    this.userService.setInactive(id);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
    this.counterService.unsubscribe();
  }
}
