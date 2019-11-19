import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MusicService } from 'src/app/services/music.service';
import { AppParameterService } from 'src/app/services/app-parameter.service';

@Component({
  selector: 'app-search-genre',
  templateUrl: './search-genre.page.html',
  styleUrls: ['./search-genre.page.scss'],
})
export class SearchGenrePage implements OnInit {

  
  errorMessage: string;
  genreList: string[];
  @ViewChild('myGenre', {static: false}) myGenreElement: ElementRef;

  constructor(private navCtrl:NavController, private musicService: MusicService, 
    private appParameterService: AppParameterService) { 
  
  }

  ngOnInit() {
    this.musicService.getAllGenres().subscribe({
      next: genreList => this.genreList = genreList,
      error: err => this.errorMessage = err
    })
  }

  OnButtonClick(){
    this.appParameterService.letter = '';
    console.log(this.myGenreElement.nativeElement.innerText);
    this.musicService.getAllMusicByGenre(this.myGenreElement.nativeElement.innerText).subscribe({
      next: musicList => this.appParameterService.myMusicList = musicList,
      error: err => this.errorMessage = err,
      complete: () => this.navCtrl.navigateRoot('/search-result')
    })
  }

}
