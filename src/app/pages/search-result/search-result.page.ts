import { Component, OnInit } from '@angular/core';
import { Music } from '../../models/music';
import { NavController } from '@ionic/angular';
import { MusicService } from 'src/app/services/music.service';
import { AppParameterService } from 'src/app/services/app-parameter.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.page.html',
  styleUrls: ['./search-result.page.scss'],
})
export class SearchResultPage implements OnInit {
  
  errorMessage: string;
  constructor(private navCtrl:NavController, private musicService: MusicService,
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

  buttonClicked(music: any){
    console.log('button clicked is: ' + music.musicId);
  }

}