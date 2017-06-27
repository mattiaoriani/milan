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
    slidesPerView: 'auto',
    centeredSlides: true,
    grabCursor: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30
  }

  ngOnInit() {
      this.router.params.subscribe(params => this.history = JSON.parse(params["id"]));
  }

}
