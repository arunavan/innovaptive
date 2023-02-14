import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyserviceService } from './myservice.service';
import {HelloServiceService} from './hello-service.service';
import { ChildComponent } from './child/child.component'
import { AccountserviceService } from './accountservice.service';
import { RevaturetrainingserviceService} from './revaturetrainingservice.service'
@NgModule({
  declarations: [
    AppComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MyserviceService,HelloServiceService,AccountserviceService,RevaturetrainingserviceService ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
