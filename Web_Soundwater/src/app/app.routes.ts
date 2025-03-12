import { Routes } from '@angular/router';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { MessagesPageComponent } from './pages/messages-page/messages-page.component';
import { ChallengesPageComponent } from './pages/challenges-page/challenges-page.component';

export const routes: Routes = [
    { path: '', component: WelcomePageComponent },
    { path: 'messages', component: MessagesPageComponent },
    { path: 'challenges', component: ChallengesPageComponent },
];
