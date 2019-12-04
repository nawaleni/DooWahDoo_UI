import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MusicService } from 'src/app/services/music.service';

// import { timingSafeEqual } from 'crypto';


@Component({
  selector: 'app-queue',
  templateUrl: './queue.page.html',
  styleUrls: ['./queue.page.scss']
})
export class QueuePage implements OnInit {

  public userList = [];
  public currentUser = [];

  constructor(private navCtrl: NavController, 
              private musicService: MusicService
              ) { }

  ngOnInit() {

    this.musicService.getCurrentUserQueue().subscribe(
      (data: any) => {
        console.log(data);
        data.userName = 'Dammy';
        data.songName = 'Graveyard - Halsey';
        this.currentUser.push(data);
      }
    );

    this.musicService.getUserQueue().subscribe(
      (data: any[]) => {
        console.log(data);
        for (let i = 0; i < data.length; i++ ) {
          data[i].userQ = i + 1;
        }
        this.userList = data;
      }
    );




  }

}
