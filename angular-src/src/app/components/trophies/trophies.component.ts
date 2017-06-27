import { Component, OnInit } from '@angular/core';
import {UploadDataService} from '../../services/upload-data.service';
import {Router} from '@angular/router';
import {PassDataService} from '../../services/pass-data.service';


@Component({
  selector: 'app-trophies',
  templateUrl: './trophies.component.html',
  styleUrls: ['./trophies.component.scss']
})
export class TrophiesComponent implements OnInit {

  trophies:Array<String>;

  constructor(private uploadData:UploadDataService,private router:Router,private passData:PassDataService) { }

  ngOnInit() {
    this.uploadData.getAllTrophies().subscribe(result => {
      this.trophies = result.trophies;
    },
    err => {
      console.log(err);
      return false;
    });
  }

  getFilter(singleTrophy){
    //return JSON.stringify(singleTrophy);
    this.passData.setsingleComponent(JSON.stringify(singleTrophy));
    console.log(singleTrophy);
    this.router.navigate(['/singletrophy']);
  }

}
