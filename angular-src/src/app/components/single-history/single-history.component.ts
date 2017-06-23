import { Component, OnInit } from '@angular/core';
import {UploadDataService} from '../../services/upload-data.service';
import {ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-history',
  templateUrl: './single-history.component.html',
  styleUrls: ['./single-history.component.scss']
})
export class SingleHistoryComponent implements OnInit {

  history:string;
  puppa:Object;

  constructor(private uploadData:UploadDataService, private router:ActivatedRoute) { }

  config: Object = {
            pagination: '.swiper-pagination',
            slidesPerView: 3,
            paginationClickable: true,
            spaceBetween: 30,
            freeMode: true
  };

  ngOnInit() {
      this.router.params.subscribe(params => this.history =params["id"]);
      console.log(this.history);
      this.puppa = JSON.parse(this.history);
      console.log(this.puppa);


  }

}
