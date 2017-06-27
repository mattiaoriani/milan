import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-trophy',
  templateUrl: './single-trophy.component.html',
  styleUrls: ['./single-trophy.component.scss']
})
export class SingleTrophyComponent implements OnInit {

  trophy:Object;

  constructor(private router:ActivatedRoute) { }

  config: Object = {
    scrollbar: '.swiper-scrollbar',
    scrollbarHide: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    grabCursor: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30
  };


  ngOnInit() {
    this.router.params.subscribe(params => this.trophy = JSON.parse(params["id"]));
  }

}
