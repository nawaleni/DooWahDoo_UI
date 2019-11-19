import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Music } from 'src/app/models/music';
import { MusicService } from 'src/app/services/music.service';

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

  constructor(private navCtrl:NavController, private musicService: MusicService) { 
    this.initializeItems();

  }

  initializeItems() {
    this.musicService.getAllMusic().subscribe({
      next: list => this.musicList = list,
      error: err => this.errorMessage = err,
      complete: () => this.filteredMusicList = this.musicList
    })

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

}