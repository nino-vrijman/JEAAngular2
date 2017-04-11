import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TimelineComponent } from "app/timeline/timeline.component";
import { ProfileComponent } from "app/profile/profile.component";
import { LoginComponent } from "app/login/login.component";

export const router: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent},
    { path: 'timeline', component: TimelineComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'profile/:username', component: ProfileComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);