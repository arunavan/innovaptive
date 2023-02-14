import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';
import { HelloServiceService} from './hello-service.service'
import { AccountserviceService } from './accountservice.service';
import { RevaturetrainingserviceService} from './revaturetrainingservice.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isValid=true;
  movies: Movie[] =[  
    {title:'Zootopia',director:'Byron Howard, Rich Moore',cast:'Idris Elba, Ginnifer Goodwin, Jason Bateman',releaseDate:'March 4, 2016'},  
    {title:'Batman v Superman: Dawn of Justice',director:'Zack Snyder',cast:'Ben Affleck, Henry Cavill, Amy Adams',releaseDate:'March 25, 2016'},  
    {title:'Captain America: Civil War',director:'Anthony Russo, Joe Russo',cast:'Scarlett Johansson, Elizabeth Olsen, Chris Evans',releaseDate:'May 6, 2016'},  
    {title:'X-Men: Apocalypse',director:'Bryan Singer',cast:'Jennifer Lawrence, Olivia Munn, Oscar Isaac',releaseDate:'May 27, 2016'},  
]  ;
   trainingmessage='';
  title = 'angularservicesapp';
  todaydate;
  msg;
  amessage;  // injecting service to componnet inside constructor 
   constructor(private rs: RevaturetrainingserviceService,private myservice: MyserviceService, private helloService :HelloServiceService,private aservice:AccountserviceService) {}
   ngOnInit() { 
      this.msg=this.helloService.sayHelo();
      this.todaydate = this.myservice.showTodayDate(); //DI
      this.amessage=this.aservice.createAccount();
      this.trainingmessage=this.rs.gettrainingschedule();
      console.log(this.trainingmessage);   } 

}
class Movie {  
  title : string;  
  director : string;  
  cast : string;  
  releaseDate : string;  
}  
