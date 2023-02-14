import { Component, OnInit } from '@angular/core';
import { HelloServiceService } from '../hello-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private hs:HelloServiceService) { }

  ngOnInit(): void {
    console.log(this.hs.sayHelo());
  }

}
