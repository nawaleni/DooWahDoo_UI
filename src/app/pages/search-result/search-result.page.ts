import { Component, OnInit } from '@angular/core';
import { Music } from '../../models/music';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.page.html',
  styleUrls: ['./search-result.page.scss'],
})
export class SearchResultPage implements OnInit {
  
  ngOnInit() {
  }

  musicList: Music[];

  constructor(private navCtrl:NavController) { 
    this.initializeItems();
  }

  initializeItems() {
    this.musicList = [
      {
        title: 'Shake your booty',
        artist: 'KC and the sunshine band'
      },
      {
        title: 'Sittin on the dock of..',
        artist: 'Ottis Redding'
      },
      {
        title: 'S Club Party',
        artist: 'S club 7'
      },
      {
        title: 'S&M',
        artist: 'Rihanna'
      },
      {
        title: 'S & M',
        artist: 'Thin Lizzy'
      },
      {
        title: 'Shit on the Radio',
        artist: 'Robbie Williams'
      },
      {
        title: 'S.M.F',
        artist: 'Twisted Sisters'
      }
  ];
  }

  
  getItems() : Music[] {
    return [
      {
        title: 'Shake your booty',
        artist: 'KC and the sunshine band'
      },
      {
        title: 'Sittin on the dock of..',
        artist: 'Ottis Redding'
      },
      {
        title: 'S Club Party',
        artist: 'S club 7'
      },
      {
        title: 'S&M',
        artist: 'Rihanna'
      },
      {
        title: 'S & M',
        artist: 'Thin Lizzy'
      },
      {
        title: 'Shit on the Radio',
        artist: 'Robbie Williams'
      },
      {
        title: 'S.M.F',
        artist: 'Twisted Sisters'
      }
  ];
  }
}
