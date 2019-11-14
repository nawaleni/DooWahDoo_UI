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
  mySession : Session;
  myKaraokeSession : KaraokeSession;
  constructor(private navCtrl:NavController, private musicService: MusicService) {}

  ngOnInit() {
    // do init at here for current route.  
    this.musicService.getCurrentSession().subscribe({
      next: mySession => this.mySession = mySession,
      error: err => this.errorMessage = err

    })

    this.musicService.getMyKaraokeSession().subscribe({
      next: myKaraokeSession => this.myKaraokeSession = myKaraokeSession,
      error: err => this.errorMessage = err
    })
  }

 

  OnMusicClicked(message: string):void{
  }

  OnListClicked(message: string):void{
  }

  OnProfileClicked(message: string):void{
  }
}
