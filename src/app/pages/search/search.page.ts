import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Music } from 'src/app/models/music';
import { MusicService } from 'src/app/services/music.service';
import { ShowDialogService } from 'src/app/services/show-dialog.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { AppParameterService } from 'src/app/services/app-parameter.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  errorMessage: string = '';
  items: string[];

  musicList: Music[];
  filteredMusicList: Music[];

  constructor(
    private nativeStorage: NativeStorage,
    private alert: ShowDialogService,
    private navCtrl: NavController, private musicService: MusicService,
    private appParameterService: AppParameterService) { 
    this.initializeItems();

  }

  initializeItems() {
    if(this.appParameterService.musicCatlog == null){

    this.musicService.getAllMusic().subscribe({
      next: list => this.musicList = list,
      error: err => this.errorMessage = err,
      complete: () => this.filteredMusicList = this.musicList
    })
  }
  else{
    this.musicList = this.appParameterService.musicCatlog;
    this.filteredMusicList = this.musicList;
  }

  }

  initializeMusicList(){
    this.filteredMusicList = this.musicList;
  }

  
  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeMusicList();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.filteredMusicList = this.musicList.filter((item) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }


  ngOnInit() {
  }

  buttonClicked(music: any) {

    this.alert.promptAlert()
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
