import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-search-genre',
  templateUrl: './search-genre.page.html',
  styleUrls: ['./search-genre.page.scss'],
})
export class SearchGenrePage implements OnInit {

  
  errorMessage: string;
  genreList: string[];

  constructor(private navCtrl:NavController, private musicService: MusicService) { 
  
  }

  ngOnInit() {
    this.musicService.getAllGenres().subscribe({
      next: genreList => this.genreList = genreList,
      error: err => this.errorMessage = err
    })
  }

}
