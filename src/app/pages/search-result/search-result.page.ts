import { Component, OnInit } from '@angular/core';
import { Music } from '../../models/music';
import { NavController, Platform } from '@ionic/angular';
import { MusicService } from 'src/app/services/music.service';
import { AppParameterService } from 'src/app/services/app-parameter.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
// import { Dialogs } from '@ionic-native/dialogs';
import { AlertController } from '@ionic/angular';
import { resolve } from 'url';
import { ShowDialogService } from 'src/app/services/show-dialog.service';


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.page.html',
  styleUrls: ['./search-result.page.scss'],
})
export class SearchResultPage implements OnInit {

  errorMessage: string;
  constructor(
    public alert: ShowDialogService,
    private platform: Platform,
    //private dialogs: Dialogs,
    private nativeStorage: NativeStorage,
    private navCtrl: NavController, private musicService: MusicService,
    private appParameterService: AppParameterService) {

  }

  get letter(): string{
    return this.appParameterService.letter;
  }

  get musicList(): Music[] {
    return this.appParameterService.myMusicList;
  }


  ngOnInit() {
  }

  buttonClicked(music: any) {


    /*
    this.platform.ready().then(() => {

      this.dialogs.confirm('Are you sure? ', 'Do you want to add this to your user queue?', ['Yes', 'No'])
      .then(
        (value) => console.log('Value selected is ' + value)
      )
      .catch(
        e => console.log('Error: ' + e)
      );

    });
    

    this.presentAlertConfirm()
    .then(
      (value) => console.log('Alert value: ' + value),
      (e) => console.log('alert error ' + e)
    );
      */

    let alert = this.alert.promptAlert()
    .then(
      (res) => {
        if(res == 'Okay') {
          this.nativeStorage.getItem('userId')
          .then(
            (data) => {
              console.log('Value retrieved' + data);
              this.musicService.setUserToQueue(data, music.musicId, 1);
            },
            (error) => console.log('Error: ' + error)
          )
          .catch(
            e => console.log('Error: ' + e)
          );
          console.log('button clicked is: ' + music.musicId);
        }
        else {
          // do nothing
        }
      },
      (e) => console.log('err: ' + e)
    );


  }


}
