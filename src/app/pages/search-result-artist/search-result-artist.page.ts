import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { AppParameterService } from 'src/app/services/app-parameter.service';
import { MusicService } from 'src/app/services/music.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-search-result-artist',
  templateUrl: './search-result-artist.page.html',
  styleUrls: ['./search-result-artist.page.scss'],
})
export class SearchResultArtistPage implements OnInit {

  errorMessage: string;

  constructor(private appParameterService: AppParameterService,
    private musicService: MusicService,
    private navCtrl: NavController) { }
  get artists(): string[]{
     return this.appParameterService.artists;
  }

  @ViewChild('divArtist', {static: false}) myArtistName : ElementRef;
  get letter(): string{
    return this.appParameterService.letter;
  }

  ngOnInit() {
  }

  handleData(data){
  }

  OnArtistClick(){
    this.appParameterService.letter = '';
    console.log(this.myArtistName.nativeElement.innerText);
    this.musicService.getAllMusicByArtist(this.myArtistName.nativeElement.innerText).subscribe({
      next: musicList => this.appParameterService.myMusicList = musicList,
      error: err => this.errorMessage = err,
      complete: () => this.navCtrl.navigateRoot('/search-result')
    })
  }

  
}
