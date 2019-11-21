import { Component, Output, EventEmitter } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserTransition } from 'src/app/services/user-transition';


@Component({
    selector:"app-footer",
    templateUrl: "./footer-menu.component.html",
    styleUrls:["./footer-menu.component.scss"]
})
export class FooterMenuComponent{
    constructor(private navCtrl:NavController, 
                private userTransition: UserTransition
            ) {}

    @Output() music = new EventEmitter();
    @Output() list = new EventEmitter();
    @Output() profile = new EventEmitter();


    OnListClick(){
        this.music.emit("clicked!");
        setTimeout(() => {
            this.userTransition.setTransition();
            this.navCtrl.navigateRoot('/queue');
            }
        ); 
    }

    OnMusicClick(){
        this.music.emit("clicked!");
        setTimeout(() => {
            this.userTransition.setTransition();
            this.navCtrl.navigateRoot('/search');
            }
        ); 
    }

    OnProfileClick(){
        this.music.emit("clicked!");
        setTimeout(() => {
            this.userTransition.setTransition();
            this.navCtrl.navigateRoot('/user-profile');
            }
        ); 
    }

}