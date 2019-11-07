import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(private navCtrl:NavController) {}

  ngOnInit() {
    // do init at here for current route.

    setTimeout(() => {
        this.navCtrl.navigateRoot('/login');
    }, 3000);  //5s
  }
}
