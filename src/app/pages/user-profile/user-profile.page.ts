import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MusicService } from 'src/app/services/music.service';
import { UserInfo } from '../../models/UserInfo';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.scss'],
})
export class UserProfilePage implements OnInit {
  
  userInfo: UserInfo;
  errorMessage: string;
  //userId: number = 3;
  constructor(private storage: NativeStorage, private navCtrl: NavController, private musicService: MusicService) { }

  ngOnInit() {

    this.storage.getItem('userId')
    .then(
      (val) => { this.setUserInfo(val); },
      e => console.log(e)
    );

    

  }

  setUserInfo(userId: number) {
    this.musicService.getUserInfo(userId).subscribe({
      next: userInfo => this.userInfo = userInfo,
      error: err => this.errorMessage = err
   });
  }

}
