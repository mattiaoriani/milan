import { Component, OnInit } from '@angular/core';
import {UploadDataService} from '../../services/upload-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hall-of-fame',
  templateUrl: './hall-of-fame.component.html',
  styleUrls: ['./hall-of-fame.component.scss']
})
export class HallOfFameComponent implements OnInit {

  footballers:Array<String>;

 //commento a caso di prova
  constructor(private uploadData:UploadDataService,private router:Router) { }

  ngOnInit() {
    this.uploadData.getAllFootballers().subscribe(result => {
      this.footballers = result.footballer;
    },
    err => {
      console.log(err);
      return false;
    });
  }

}
