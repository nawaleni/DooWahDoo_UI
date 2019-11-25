import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MusicService } from 'src/app/services/music.service';
import { UserInfo } from 'src/app/models/UserInfo';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {

  userInfo: UserInfo;
  errorMessage: string;
  userId: number = 3;
  constructor(private navCtrl:NavController, private musicService: MusicService) { }

  ngOnInit() {

    // this.musicService.getUserInfo(this.userId).subscribe({
    //   next: userInfo => this.userInfo = userInfo,
    //   error: err => this.errorMessage = err
    // })

    

  }

}
