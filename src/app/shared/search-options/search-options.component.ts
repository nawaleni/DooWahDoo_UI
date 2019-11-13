import { Component, EventEmitter, Output } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
    selector: "app-search-options",
    templateUrl: "./search-options.component.html",
    styleUrls: ["./search-options.component.scss"]
})
export class SearchOptionsComponent{

    constructor(private navCtrl:NavController) {}

    @Output() artist = new EventEmitter();
    @Output() title = new EventEmitter();
    @Output() genre = new EventEmitter();

    SearchByTitle(){
        this.title.emit("Title clicked!");
        setTimeout(() => {
            this.navCtrl.navigateRoot('/search-title');
            }
        ); 
    }

    SearchByArtist() {
        this.artist.emit("Artist clicked!");
        setTimeout(() => {
            this.navCtrl.navigateRoot('/search-artist');
            }
        ); 
    }

    SearchByGenre() {
        this.artist.emit("Genre clicked!");
        setTimeout(() => {
            this.navCtrl.navigateRoot('/search-genre');
            }
        ); 
    }





}