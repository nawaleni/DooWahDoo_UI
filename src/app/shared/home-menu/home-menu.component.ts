import { Component, OnInit, Output } from '@angular/core';
import { NavController } from '@ionic/angular';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.scss'],
})
export class HomeMenuComponent implements OnInit {

  @Output() home = new EventEmitter();

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }

  OnHomeClick(){
    this.home.emit('Clicked home!');
    setTimeout(() => {
      this.navCtrl.navigateRoot('/dashboard');
      }
  ); 
  }

}
