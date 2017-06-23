import { Component, OnInit } from '@angular/core';
import {UploadDataService} from '../../services/upload-data.service';

@Component({
  selector: 'app-single-history',
  templateUrl: './single-history.component.html',
  styleUrls: ['./single-history.component.scss']
})
export class SingleHistoryComponent implements OnInit {

  history:Array<String>;

  constructor(private uploadData:UploadDataService) { }

  config: Object = {
            pagination: '.swiper-pagination',
            slidesPerView: 3,
            paginationClickable: true,
            spaceBetween: 30,
            freeMode: true
  };

  ngOnInit() {
    this.uploadData.getAllStories().subscribe(result => {
      this.history = result.stories;
    },
    err => {
      console.log(err);
      return false;
    });
  }

}
