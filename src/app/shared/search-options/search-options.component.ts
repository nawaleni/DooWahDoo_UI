import { Component, EventEmitter, Output } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserTransition } from 'src/app/services/user-transition';


@Component({
    selector: "app-search-options",
    templateUrl: "./search-options.component.html",
    styleUrls: ["./search-options.component.scss"]
})
export class SearchOptionsComponent{

    constructor(private navCtrl: NavController, private userTransition: UserTransition ) {}

    @Output() artist = new EventEmitter();
    @Output() title = new EventEmitter();
    @Output() genre = new EventEmitter();

    SearchByTitle(){
        this.title.emit("Title clicked!");
        setTimeout(() => {
            this.userTransition.setTransition();
            this.navCtrl.navigateRoot('/search-title');
            }
        ); 
    }

    SearchByArtist() {
        this.artist.emit("Artist clicked!");
        setTimeout(() => {
            this.userTransition.setTransition();
            this.navCtrl.navigateRoot('/search-artist');
            }
        ); 
    }

    SearchByGenre() {
        this.artist.emit("Genre clicked!");
        setTimeout(() => {
            this.userTransition.setTransition();
            this.navCtrl.navigateRoot('/search-genre');
            }
        ); 
    }





}