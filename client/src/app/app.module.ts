import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { EmergencyFeedComponent } from './emergency-feed/emergency-feed.component';
import { NavbarComponent} from './navbar/navbar.component';
import { MakeprofileComponent} from './makeprofile/makeprofile.component';
import { MatchComponent} from './match/match.component';
import { HttpClientModule } from '@angular/common/http';
import { StartComponent } from './start/start.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ChatComponent } from './chat/chat.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    EmergencyFeedComponent,
    NavbarComponent,
    MakeprofileComponent,
    MatchComponent,
    EmergencyFeedComponent,
    StartComponent,
    ContactsComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
