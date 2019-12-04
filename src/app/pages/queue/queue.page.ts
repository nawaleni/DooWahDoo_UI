import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MusicService } from 'src/app/services/music.service';
import * as moment from 'moment';

// import { timingSafeEqual } from 'crypto';


@Component({
  selector: 'app-queue',
  templateUrl: './queue.page.html',
  styleUrls: ['./queue.page.scss']
})
export class QueuePage implements OnInit {



  public userList = [];
  public currentUser = [];
  private timeoutId: any;

  constructor(private navCtrl: NavController, 
              private musicService: MusicService,
              
              ) { }

  ngOnInit() {






  }

  getDataToBind(){
    this.musicService.getCurrentUserQueue().subscribe(
      (data: any) => {
        console.log(data);
        this.currentUser = [];
        // data.userName = 'Dammy';
        // data.songName = 'Graveyard - Halsey';
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

  ionViewDidEnter() {
    this.initRefresh();
  }
  
  ionViewDidLeave() {
    this.stopRefresh();
  }

  private initRefresh() {
    this.refresh();
    this.timeoutId = setInterval(() => this.refresh(), 5 * 1000);
  }

  private stopRefresh() {
    clearInterval(this.timeoutId);
  }

  private refresh() {
    this.getDataToBind();
    console.log(`Refresh at ${moment().format('LTS')}`);
  }


}
