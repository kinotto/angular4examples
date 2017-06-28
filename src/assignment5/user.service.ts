import { EventEmitter } from '@angular/core';

export class UserService {
  private activeUsers = ['Max', 'Anna'];
  private inactiveUsers = ['Chris', 'Manu'];
  private emitter: EventEmitter<{}> = new EventEmitter();

  constructor(){}
  setActive(id: number){
    let user = this.inactiveUsers[id];
    this.activeUsers.push(user);
    this.inactiveUsers.splice(id, 1);
    this.emitter.emit({active: this.activeUsers, inactive: this.inactiveUsers});
  }
  setInactive(id: number){
    let user = this.activeUsers[id];
    this.inactiveUsers.push(user);
    this.activeUsers.splice(id, 1);
    this.emitter.emit({active: this.activeUsers, inactive: this.inactiveUsers});
  }
  subscribe(callback) {
    return this.emitter.subscribe(callback);
  }
  getInactiveUsers(){
    return this.inactiveUsers.slice();
  }
  getActiveUsers(){
    return this.activeUsers.slice();
  }

}
