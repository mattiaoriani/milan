import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import {PassDataService} from '../../services/pass-data.service';


@Component({
  selector: 'app-single-trophy',
  templateUrl: './single-trophy.component.html',
  styleUrls: ['./single-trophy.component.scss']
})
export class SingleTrophyComponent implements OnInit {

  trophy:Object;

  constructor(private router:ActivatedRoute,private passData:PassDataService) { }

  config: Object = {
    scrollbar: '.swiper-scrollbar',
    scrollbarHide: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    preloadImages: false,
    grabCursor: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30
  };


  ngOnInit() {
    this.trophy = JSON.parse(this.passData.getsingleComponent());
    //this.router.params.subscribe(params => this.trophy = JSON.parse(params["id"]));
  }

}
