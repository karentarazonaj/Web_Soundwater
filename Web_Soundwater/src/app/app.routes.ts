import { Routes } from '@angular/router';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { MessagesPageComponent } from './pages/messages-page/messages-page.component';
import { ChallengesPageComponent } from './pages/challenges-page/challenges-page.component';
import { BackupPageComponent } from './pages/backup-page/backup-page.component';
import { MessageslistPageComponent } from './pages/messageslist-page/messageslist-page.component';
import { ChallengeslistPageComponent } from './pages/challengeslist-page/challengeslist-page.component';

export const routes: Routes = [
    { path: '', component: WelcomePageComponent },
    { path: 'messages', component: MessagesPageComponent },
    { path: 'challenges', component: ChallengesPageComponent },
    { path: 'backup', component: BackupPageComponent },
    { path: 'messages-list', component: MessageslistPageComponent },
    { path: 'challenges-list', component: ChallengeslistPageComponent },
];
