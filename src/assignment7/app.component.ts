import { Component, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    input.ng-touched.ng-invalid{
      border-color: red;
    }
    label{
      font-size: 13px;
    }
  `]
})
export class AppComponent implements OnInit{
  myForm: FormGroup;

  ngOnInit(){
    //reactive approach
    this.myForm = new FormGroup({
      projectName: new FormControl('', [Validators.required
      ], [this.validateProjectNameAsync]),
      email: new FormControl('', Validators.email),
      type: new FormControl('', Validators.required)
    });
  }

  //sync validator
  validatorProjectName(projectName: FormControl) {
    if(projectName.value === 'Test'){
      return {
        projectName: {valid: false}
      }
    }
    return null;
  }

  //async validator with Observables
  validateProjectNameAsync(projectName: FormControl) :Observable<{any}> {
    return new Observable((observer) => {
      if(projectName.value === 'Test'){
        observer.next({
          projectName: false
        })
      } else{
        observer.next(null);
      }
      observer.complete();
    })
    //.first();
  }

  //async validator with Promise
  validateProjectNameAsync2(projectName: FormControl) :Promise<any> {
    return new Promise((resolve, reject) => {
      if(projectName.value === 'Test'){
        return resolve({
          projectName: false
        })
      } else{
        return resolve(null);
      }
    })
  }
  onSubmit(){
    console.log(this.myForm);
  }

}
