import { ViewChild, ViewChildren, Component, QueryList, ElementRef, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
declare var jquery:any;
declare var $ :any;


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authService:AuthService,
    private router:Router,
    private flashMessage:FlashMessagesService) { }

    @ViewChild('pino') div:ElementRef;


  ngOnInit() {
    console.log(this.div.nativeElement);

  }

  onLogoutClick(){
    this.authService.logout();
    this.flashMessage.show('You are logged out', {
      cssClass:'alert-success',
      timeout: 3000
    });
    this.router.navigate(['']);
    return false;
  }

  toggleNavBar(){
      $('.navbar-collapse').collapse('hide');
  }



}
