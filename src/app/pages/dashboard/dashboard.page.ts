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

  OnMusicClicked(message: string):void{
  }

  OnListClicked(message: string):void{
  }

  OnProfileClicked(message: string):void{
  }
}
