import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-search-artist',
  templateUrl: './search-artist.page.html',
  styleUrls: ['./search-artist.page.scss'],
})
export class SearchArtistPage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }

  SearchByTitleS(){
    // do init at here for current route.
    setTimeout(() => {
        this.navCtrl.navigateRoot('/search-result');
    }, );  //5s
  }

}
