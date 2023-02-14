import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountserviceService {

  constructor() { }

  createAccount() {
  
    return  "Account is created successfully..";
  }
}
