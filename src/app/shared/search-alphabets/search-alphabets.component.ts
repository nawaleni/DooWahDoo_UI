import { Component, EventEmitter, Output } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
    selector: "app-alphabets",
    templateUrl: "./search-alphabets.component.html",
    styleUrls: ["./search-alphabets.component.scss"]
})
export class SearchByAlphabetsComponent{

    constructor(private navCtrl:NavController) {}

    @Output() A = new EventEmitter();
    @Output() B = new EventEmitter();
    @Output() C = new EventEmitter();

    SearchByTitleA(){
        this.A.emit("A clicked!");
        setTimeout(() => {
            this.navCtrl.navigateRoot('/search-result');
            }
        ); 
    }

    SearchByTitleB() {
        this.B.emit("B clicked!");
        setTimeout(() => {
            this.navCtrl.navigateRoot('/search-result');
            }
        ); 
    }





}