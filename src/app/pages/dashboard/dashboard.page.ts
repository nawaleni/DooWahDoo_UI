import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MusicService } from 'src/app/services/music.service';
import { Session } from '../../models/session';
import { KaraokeSession } from '../../models/karaokeSession';

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
  constructor(private navCtrl: NavController, private musicService: MusicService) {}

  ngOnInit() {
    // do init at here for current route.  
    this.getSessionInfo();
    this.myFunction();
  }

  myFunction() {
    var self = this;
    setInterval(function(){self.getSessionInfo();}, 5000); 
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
        data.userName = 'Dammy';
        data.musicTitle = 'Graveyard - Halsey';
        data.placeName = 'Mist RoofTop Bar';
        data.KJname = 'Venessa Feil';
        this.currentUser.push(data);
      }
    );

  }

 

  OnMusicClicked(message: string):void{
  }

  OnListClicked(message: string):void{
  }

  OnProfileClicked(message: string):void{
  }

  myfunction(){}
}
