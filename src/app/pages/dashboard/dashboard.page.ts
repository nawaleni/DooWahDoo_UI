import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MusicService } from 'src/app/services/music.service';
import { Session } from '../../models/session';
import { KaraokeSession } from '../../models/karaokeSession';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  errorMessage: string;
  mySession: Session;
  myKaraokeSession: KaraokeSession;
  currentUser = [];
  constructor(private storage: NativeStorage, private navCtrl: NavController, private musicService: MusicService) {}

  mySongName: string;
  mySongArtist: string;
  myTimeRemaining: string;

  userQueue:any[] = [];

  ngOnInit() {
    // do init at here for current route.  
    this.getSessionInfo();
    this.myFunction();
  }

  myFunction() {
    var self = this;
    setInterval(function(){self.getSessionInfo();}, 30000); 
  }

  getSessionInfo() {
    console.log("getting Session data");
    this.musicService.getCurrentSession().subscribe({
      next: mySession => this.mySession = mySession,
      error: err => this.errorMessage = err
    });

    this.musicService.getCurrentUserQueue().subscribe(
      (data: any) => {
        this.currentUser = [];
        console.log(data);
        // data.userName = 'Dammy';
        // data.musicTitle = 'Graveyard - Halsey';
        data.placeName = 'Mist RoofTop Bar';
        data.KJname = 'Venessa Feil';
        this.currentUser.push(data);
      }
    );

    this.musicService.getUserQueue().subscribe(
      (data: any[]) => {
        this.storage.getItem('userId')
            .then(
              (val) => {
                this.musicService.getUserInfo(val).subscribe(
                  (userInfoData: any) => {
                    console.log('length ' + data.length);
                    for (let i = 0; i < data.length; i++ ) {
                      // console.log(data[i].userName);
                      if (data[i].userName == userInfoData.firstName) {
                        console.log(data[i].userName);
                        this.mySongName = data[i].songName;
                        break;
                      }
                    }
                  },
                  e => console.log(e)
                );
              },
              error => console.log(error)
            );


        
      },
      e => console.log(e),
      () => {

      }
    );

    this.musicService.getTimeRemaining().subscribe(
      data => this.myTimeRemaining = data,
      (e) => console.log(e)
    );

  }

  OnMusicClicked(message: string):void {
  }

  OnListClicked(message: string):void {
  }

  OnProfileClicked(message: string):void {
  }

  myfunction(){}
}
