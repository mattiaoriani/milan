import { Component, OnInit } from '@angular/core';
import {UploadDataService} from '../../services/upload-data.service';

@Component({
  selector: 'app-trophies',
  templateUrl: './trophies.component.html',
  styleUrls: ['./trophies.component.scss']
})
export class TrophiesComponent implements OnInit {

  trophies:Array<String>;

  constructor(private uploadData:UploadDataService) { }

  config: Object = {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 30
        };

        ngOnInit() {
          this.uploadData.getAllTrophies().subscribe(result => {
            this.trophies = result.trophy;
          },
          err => {
            console.log(err);
            return false;
          });
        }

}
