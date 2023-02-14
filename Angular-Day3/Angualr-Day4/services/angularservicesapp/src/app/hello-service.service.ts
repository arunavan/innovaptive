import { Injectable } from '@angular/core';
// @Component @Pipe @Directive @NgModule @Injectable 
@Injectable({
  providedIn: 'root'
})
export class HelloServiceService {

  constructor() { }
  sayHelo() {
   // alert("Welcome to Services");
    return "Welcome to Services";
  }
}
