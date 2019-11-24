import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-queue',
  templateUrl: './queue.page.html',
  styleUrls: ['./queue.page.scss'],
})
export class QueuePage implements OnInit {

  public userList: any[] = [];

  constructor(private navCtrl:NavController) { }

  ngOnInit() {

    //let userList2 = [];
    this.userList.push({
      userName: 'Gemmy',
      userQueue: 1
    });
    this.userList.push({
      userName: 'AMy',
      userQueue: 2
    });
    this.userList.push({
      userName: 'Lamy',
      userQueue: 3
    });
    this.userList.push({
      userName: 'Yammy',
      userQueue: 4
    });

  }

}
