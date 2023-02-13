
import { Component } from '@angular/core';
import { Customer } from './customer'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor() {}
   model =  new Customer("ram","reddy","ram@gmail.com","123456");
   submitted = false;

  onSubmit() { this.submitted = true; 
  console.log("submit...");
  console.log(JSON.stringify(this.model));
  }

  // TODO: Remove this when we're done
  //outputmessage= JSON.stringify(this.model); 
  get customerdata() { return JSON.stringify(this.model); }
}

/*

  title = 'Angular!';
  todaydate = new Date();
  jsonval = {name:'Rox', age:'25', address:{a1:'Mumbai', a2:'Karnataka'}};
  months = ["Jan", "Feb", "Mar", "April", "May", "Jun",
            "July", "Aug", "Sept", "Oct", "Nov", "Dec"];



 
  model: any = {};

  
   outputmessage:string;
  onSubmit() {
    this.outputmessage='SUCCESS!! :-)\n\n' + JSON.stringify(this.model);
  }






counterValue = 0;

  get counter() {
    return this.counterValue;
  }

  set counter(value) {
    this.counterValue = value;
  }

  decrement() {
    this.counter--;
  }

  increment() {
    this.counter++;
  }
}


*/
 