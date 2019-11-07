import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserProfilePage } from '../user-profile/user-profile.page';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private navCtrl:NavController) {}

  ngOnInit() {
    // do init at here for current route.  
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
