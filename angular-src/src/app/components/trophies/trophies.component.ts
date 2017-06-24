import { Component, OnInit } from '@angular/core';
import {UploadDataService} from '../../services/upload-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-trophies',
  templateUrl: './trophies.component.html',
  styleUrls: ['./trophies.component.scss']
})
export class TrophiesComponent implements OnInit {

  trophies:Array<String>;

  constructor(private uploadData:UploadDataService,private router:Router) { }

  ngOnInit() {
    this.uploadData.getAllTrophies().subscribe(result => {
      this.trophies = result.trophy;
      console.log(this.trophies);
    },
    err => {
      console.log(err);
      return false;
    });
  }


}
