import { Component, OnInit } from '@angular/core';
import {UploadDataService} from '../../services/upload-data.service';
import {PassDataService} from '../../services/pass-data.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  history:Array<String>;

  constructor(private uploadData:UploadDataService,private passData:PassDataService,private router:Router) { }

  ngOnInit() {
    this.uploadData.getAllStories().subscribe(result => {
      this.history = result.stories;
    },
    err => {
      console.log(err);
      return false;
    });
  }

  getFilter(singleHistory){
    //return JSON.stringify(singleHistory);
    this.passData.setsingleComponent(JSON.stringify(singleHistory));
    console.log(singleHistory);
    this.router.navigate(['/singlehistory']);
  }

}
