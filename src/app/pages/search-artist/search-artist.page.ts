import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AppParameterService } from 'src/app/services/app-parameter.service';

@Component({
  selector: 'app-search-artist',
  templateUrl: './search-artist.page.html',
  styleUrls: ['./search-artist.page.scss'],
})
export class SearchArtistPage implements OnInit {

  constructor(private navCtrl:NavController, private appParameterService: AppParameterService) { }

  ngOnInit() {
    this.appParameterService.clickedFrom = 'artist';
  }

  /*
  OnBClicked():void{
    this.appParameterService.clickedFrom = 'artist';
  }
  */
}
