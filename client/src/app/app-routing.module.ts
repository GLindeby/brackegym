import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent} from './profile/profile.component';
import { MakeprofileComponent} from './makeprofile/makeprofile.component';
import { MatchComponent} from './match/match.component';
import { EmergencyFeedComponent} from './emergency-feed/emergency-feed.component';
import { StartComponent } from './start/start.component';
import { ChatComponent } from 'src/app/chat/chat.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  {path: 'profile', component: ProfileComponent},
  {path: 'makeprofile', component: MakeprofileComponent},
  {path: 'match', component: MatchComponent},
  {path: 'emergency-feed', component: EmergencyFeedComponent},
  {path: 'start', component: StartComponent},
  {path: 'chat', component: ChatComponent},
  {path: 'contacts', component: ContactsComponent}
  //{path: 'makeprofile', component: MakeprofileComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//export const RoutingComponent = [EditorComponent, ViewComponent]
