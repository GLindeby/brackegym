import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { EmergencyFeedComponent } from './emergency-feed/emergency-feed.component';
import { NavbarComponent} from './navbar/navbar.component';
import { MakeprofileComponent} from './makeprofile/makeprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    EmergencyFeedComponent,
    NavbarComponent,
    MakeprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
