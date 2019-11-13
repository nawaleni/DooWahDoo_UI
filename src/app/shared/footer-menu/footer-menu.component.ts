import { Component, Output, EventEmitter } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
    selector:"app-footer",
    templateUrl: "./footer-menu.component.html",
    styleUrls:["./footer-menu.component.scss"]
})
export class FooterMenuComponent{
    constructor(private navCtrl:NavController) {}

    @Output() music = new EventEmitter();
    @Output() list = new EventEmitter();
    @Output() profile = new EventEmitter();


    OnListClick(){
        this.music.emit("clicked!");
        setTimeout(() => {
            this.navCtrl.navigateRoot('/queue');
            }
        ); 
    }

    OnMusicClick(){
        this.music.emit("clicked!");
        setTimeout(() => {
            this.navCtrl.navigateRoot('/search');
            }
        ); 
    }

    OnProfileClick(){
        this.music.emit("clicked!");
        setTimeout(() => {
            this.navCtrl.navigateRoot('/user-profile');
            }
        ); 
    }

}