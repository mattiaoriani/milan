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

  ngOnInit() {
    this.router.params.subscribe(params => this.trophy = JSON.parse(params["id"]));
  }

}
