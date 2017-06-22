import { Component, OnInit } from '@angular/core';
import {UploadDataService} from '../../services/upload-data.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hall-of-fame',
  templateUrl: './hall-of-fame.component.html',
  styleUrls: ['./hall-of-fame.component.scss']
})
export class HallOfFameComponent implements OnInit {

  footballers:Array<String>;

  constructor(private uploadData:UploadDataService,private router:Router) { }

  config: Object = {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 30
  };

  ngOnInit() {
    this.uploadData.getAllFootballers().subscribe(result => {
      this.footballers = result.footballer;
    },
    err => {
      console.log(err);
      return false;
    });
  }

  getSumAppearences(footballer) {
    let total = 0;
    for(var i = 0; i < footballer["statics"].length; i++){
        total +=footballer["statics"][i]["apperances"];
    }
    return total;
  }

  getSumGoals(footballer) {
    let total = 0;
    for(var i = 0; i < footballer["statics"].length; i++){
        total +=footballer["statics"][i]["goals"];
    }
    return total;
  }

  getThrophyPath(trophy) {
    switch(trophy.name){
      case "Scudetto Serie A": return "../../assets/hall-of-fame/scudetto.png";
      case "Champions League": return "../../assets/hall-of-fame/championsleague.png";
      case "Coppa Italia TIM": return "../../assets/hall-of-fame/coppaitalia.png";
      case "UEFA Supercup": return "../../assets/hall-of-fame/supercoppaeuropea.png";
      case "FIFA Club's World Cup": return "../../assets/hall-of-fame/fifaworldcup.png";
      case "Supercoppa Italiana": return "../../assets/hall-of-fame/supercoppaitaliana.png";
      case "Coppa Intercontinentale": return "../../assets/hall-of-fame/intercontinentale.png";
      case "FIFA Pallone d'oro": return "../../assets/hall-of-fame/pallonedoro.png";
      default : return "../../assets/hall-of-fame/presenze.png";;
    }
  }

pino:boolean;

  checkIfHasThrophy(footballer){
    var size = Object.keys(footballer["trophiesWon"]).length;
    if(size==0){
      return false;
    }else{
      return true;
    }
  }




}
