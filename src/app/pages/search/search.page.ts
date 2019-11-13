import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  searchQuery: string = '';
  items: string[];

  constructor(private navCtrl:NavController) { 
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      'Amsterdam',
      'Bogota',
      'sample'
    ];
  }

  
  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }


  ngOnInit() {
  }

  OnMusicClicked(message: string):void{
  }

  OnListClicked(message: string):void{
  }

  OnProfileClicked(message: string):void{
  }
  
  SearchByTitle(){
    setTimeout(() => {
      this.navCtrl.navigateRoot('/search-title');
    }, );
  }

  SearchByArtist(){
    setTimeout(() => {
      this.navCtrl.navigateRoot('/search-artist');
    }, );
  }

  SearchByGenre(){
    setTimeout(() => {
      this.navCtrl.navigateRoot('/search-artist');
    }, );
  }
}
