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
      scrollbar: '.swiper-scrollbar',
      scrollbarHide: true,
      simulateTouch:true,
      slidesPerView: 1,
      centeredSlides: false,
      spaceBetween: 0,
      grabCursor: true,
      pagination: '.swiper-pagination',
      paginationClickable: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
  };

  ngOnInit() {
      this.router.params.subscribe(params => this.history = JSON.parse(params["id"]));
  }

}
