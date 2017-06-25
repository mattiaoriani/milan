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
import { HistoryComponent } from './components/history/history.component';
import { TrophiesComponent } from './components/trophies/trophies.component';
import { HallOfFameComponent } from './components/hall-of-fame/hall-of-fame.component';
import { SingleHistoryComponent } from './components/single-history/single-history.component';
import { SingleFootballerComponent } from './components/single-footballer/single-footballer.component';
import { SingleTrophyComponent } from './components/single-trophy/single-trophy.component';
import { InfoComponentComponent } from './components/info-component/info-component.component';

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
  {path:'info', component:InfoComponentComponent},
  {path:'history', component: HistoryComponent},
  {path:'trophies', component: TrophiesComponent},
  {path:'hall-of-fame', component:HallOfFameComponent},
  {path:'singlehistory/:id', component:SingleHistoryComponent},
  {path:'singlefootballer/:id', component:SingleFootballerComponent},
  {path:'singletrophy/:id', component:SingleTrophyComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    HistoryComponent,
    TrophiesComponent,
    HallOfFameComponent,
    SingleHistoryComponent,
    SingleFootballerComponent,
    SingleTrophyComponent,
    InfoComponentComponent,
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
