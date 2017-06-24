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

  constructor(private uploadData:UploadDataService,private router:Router) { }

  config: Object = {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 0
  };

  ngOnInit() {
    this.uploadData.getAllFootballers().subscribe(result => {
      this.footballers = result.footballer;
    },
    err => {
      console.log(err);
      return false;
    });
  }

  getPlayerCoverImg(footballer){
    console.log(footballer.coverImg);
    return footballer.coverImg;

  }

  getFilter(footballer){
    return JSON.stringify(footballer);
  }


}
