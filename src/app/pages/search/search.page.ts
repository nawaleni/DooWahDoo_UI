import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }

  userProfilePage(){
    // do init at here for current route.
    setTimeout(() => {
        this.navCtrl.navigateRoot('/user-profile');
    }, );  //5s
  }

  searchMusic(){
    // do init at here for current route.
    setTimeout(() => {
        this.navCtrl.navigateRoot('/search');
    }, );  //5s
  }

  queue(){
    // do init at here for current route.
    setTimeout(() => {
        this.navCtrl.navigateRoot('/queue');
    }, );  //5s
  }
}
