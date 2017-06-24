import { Component, OnInit } from '@angular/core';
import {UploadDataService} from '../../services/upload-data.service';
import {ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-history',
  templateUrl: './single-history.component.html',
  styleUrls: ['./single-history.component.scss']
})
export class SingleHistoryComponent implements OnInit {

  history:Object;

  constructor(private uploadData:UploadDataService, private router:ActivatedRoute) { }

  config: Object = {
            pagination: '.swiper-pagination',
            slidesPerView: 1,
            paginationClickable: true,
            spaceBetween: 10,
            freeMode: true
  };

  ngOnInit() {
      this.router.params.subscribe(params => this.history = JSON.parse(params["id"]));
  }

}
