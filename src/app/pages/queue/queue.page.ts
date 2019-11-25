import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { timingSafeEqual } from 'crypto';


@Component({
  selector: 'app-queue',
  templateUrl: './queue.page.html',
  styleUrls: ['./queue.page.scss'],
})
export class QueuePage implements OnInit {

  public userList: any[] = [];
  //public i: number = 1;

  constructor(private navCtrl:NavController) { }

  ngOnInit() {

    //let userList2 = [];
    this.userList.push({
      userName: 'Gemmy',
      userSong: 'It Starts with One',
      //userQueue: 1
    });
    this.userList.push({
      userName: 'AMy',
      userSong: 'Yellow - Coldplay',
      //userQueue: 2
    });
    this.userList.push({
      userName: 'Lamy',
      userSong: 'Fix you - Coldplay',
      //userQueue: 3
    });
    this.userList.push({
      userName: 'Linkin Park - Numb',
      //userQueue: 4
    });

    for( let i: number = 0; i < this.userList.length; i++) {
      this.userList[i].userQ = i+1;
    }
  }

}
