import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { HelloServiceService} from '../hello-service.service'
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  currentdate;
  message;

  constructor(private hService: HelloServiceService,private mService: MyserviceService) { }

  ngOnInit(): void {
    this.currentdate=this.mService.showTodayDate();
    this.message=this.hService.sayHelo();

  }

}
