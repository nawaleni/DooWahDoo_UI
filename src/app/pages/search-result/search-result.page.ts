import { Component, OnInit } from '@angular/core';
import { Music } from '../../models/music';
import { NavController } from '@ionic/angular';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.page.html',
  styleUrls: ['./search-result.page.scss'],
})
export class SearchResultPage implements OnInit {
  
  errorMessage: string;
  musicList: Music[];

  constructor(private navCtrl:NavController, private musicService: MusicService) { 
  
  }

  ngOnInit() {
    this.musicService.getAllMusic().subscribe({
      next: musicList => this.musicList = musicList,
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