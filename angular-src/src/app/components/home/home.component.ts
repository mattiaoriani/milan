import { Component, OnInit } from '@angular/core';
import {MdDialog} from '@angular/material';
import {LoginComponent} from '../login/login.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
  }

  openDialog() {
    this.dialog.open(LoginComponent);
  }


}
