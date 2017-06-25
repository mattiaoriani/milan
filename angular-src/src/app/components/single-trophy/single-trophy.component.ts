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
      pagination: '.swiper-pagination',
      paginationClickable: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      spaceBetween: 0
  };

  photoconfig:Object = {
      pagination: '.swiper-pagination-img',
      slidesPerView: 1,
      paginationClickable: true,
      spaceBetween: 10,
      freeMode: true
  }

  ngOnInit() {
    this.router.params.subscribe(params => this.trophy = JSON.parse(params["id"]));
  }

}
