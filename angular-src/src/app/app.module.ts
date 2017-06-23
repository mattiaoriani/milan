import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { MaterialModule } from '@angular/material';
import { SwiperModule } from 'angular2-useful-swiper';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HistoryComponent } from './components/history/history.component';
import { TrophiesComponent } from './components/trophies/trophies.component';
import { HallOfFameComponent } from './components/hall-of-fame/hall-of-fame.component';
import { SingleHistoryComponent } from './components/single-history/single-history.component';

import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {UploadDataService} from './services/upload-data.service';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {AuthGuard} from './guards/auth.guard';


const appRoutes: Routes =  [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path:'history', component: HistoryComponent},
  {path:'trophies', component: TrophiesComponent},
  {path:'hall-of-fame', component:HallOfFameComponent},
  {path:'singlehistory/:id', component:SingleHistoryComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    HistoryComponent,
    TrophiesComponent,
    HallOfFameComponent,
    SingleHistoryComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    SwiperModule
  ],
  providers: [ValidateService, AuthService, AuthGuard,UploadDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
