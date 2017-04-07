import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';

import { AppComponent } from './app.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ProfileComponent } from './profile/profile.component';
import { KweetsComponent } from './kweets/kweets.component';
import { SmallprofileComponent } from './smallprofile/smallprofile.component';
import { NewkweetComponent } from './newkweet/newkweet.component';
import { LoginComponent } from './login/login.component';

import { RestService } from "app/rest.service";
import { UserService } from "app/user.service";
import { KweetService } from "app/kweet.service";

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    ProfileComponent,
    KweetsComponent,
    SmallprofileComponent,
    NewkweetComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [
    HttpModule,
    RestService,
    UserService,
    KweetService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
