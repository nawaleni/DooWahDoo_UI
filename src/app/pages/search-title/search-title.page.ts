import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-search-title',
  templateUrl: './search-title.page.html',
  styleUrls: ['./search-title.page.scss'],
})
export class SearchTitlePage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }

  /* Footer menu events  */
  OnMusicClicked(message: string):void{
  }

  OnListClicked(message: string):void{
  }

  OnProfileClicked(message: string):void{
  }

  //search options
  OnTitleClicked(message: string):void{
  }

  OnArtistClicked(message: string):void{
  }

  OnGenreClicked(message: string):void{
  }
 
  //Search by Aplhabet events
  OnAClicked(message: string):void{
  }

  OnBClicked(message: string):void{
  }

  OnCClicked(message: string):void{
  }


}
