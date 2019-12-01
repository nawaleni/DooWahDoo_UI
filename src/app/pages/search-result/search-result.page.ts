import { Component, OnInit } from '@angular/core';
import { Music } from '../../models/music';
import { NavController } from '@ionic/angular';
import { MusicService } from 'src/app/services/music.service';
import { AppParameterService } from 'src/app/services/app-parameter.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Dialogs } from '@ionic-native/dialogs';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.page.html',
  styleUrls: ['./search-result.page.scss'],
})
export class SearchResultPage implements OnInit {
  
  errorMessage: string;
  constructor(
    private dialogs: Dialogs,
    private nativeStorage: NativeStorage,
    private navCtrl:NavController, private musicService: MusicService,
    private appParameterService: AppParameterService) { 
  
  }
  
  get letter(): string{
    return this.appParameterService.letter;
  }

  get musicList(): Music[]{
    return this.appParameterService.myMusicList;
  }


  ngOnInit() {
  }

  buttonClicked(music: any) {

    this.dialogs.confirm('Are you sure? ', 'Do you want to add this to your user queue?', ['Yes', 'No'])
    .then(
      (value) => console.log('Value selected is ' + value)
    )
    .catch(
      e => console.log('Error: ' + e)
    );

    this.nativeStorage.getItem('userId')
    .then(
      (data) => {
        console.log('Value retrieved' + data);
        this.musicService.setUserToQueue(data, music.musicId, 1);
      },
      (error) => console.log('Error: ' + error)
    );
    console.log('button clicked is: ' + music.musicId);
  }

}
