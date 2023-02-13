// with validations

import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent {
 
   passwd;
   emailid;
   formdata;
   ngOnInit() {
      this.formdata = new FormGroup({
         emailid: new FormControl("akash@gmail.com", Validators.compose([
            Validators.required,
            Validators.pattern("[^ @]*@[^ @]*")
         ])),
         passwd: new FormControl("123456", Validators.compose([
          Validators.required,
          Validators.maxLength(6)
       ]))
      });
   }
   onClickSubmit(data) {this.emailid = data.emailid;
  this.passwd=data.passwd;
console.log(this.emailid+"   "+this.passwd);

}
}


// without validations
/*
import { Component } from '@angular/core';
import{FormGroup,FormControl}from'@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formdata;
  emailid;
  passwd;
  constructor() {}
  ngOnInit(){    // from model to template   ts to html
     this.formdata =new FormGroup({   
             emailid:new FormControl("angular@gmail.com"),
             passwd:new FormControl("abcd1234")
    });
  }
  onClickSubmit(data) {   // from template to model   html to ts
    this.emailid = data.emailid;
    this.passwd=data.passwd;
  }
}
*/