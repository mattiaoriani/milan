import { Component, OnInit } from '@angular/core';
import {UploadDataService} from '../../services/upload-data.service';
import {PassDataService} from '../../services/pass-data.service';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  history:Array<String>;

  constructor(private uploadData:UploadDataService,private passData:PassDataService) { }

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
  }

}
