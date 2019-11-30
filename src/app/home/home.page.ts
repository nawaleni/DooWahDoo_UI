import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { UserTransition } from 'src/app/services/user-transition';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(private navCtrl: NavController, private userTransition: UserTransition) {}

  ngOnInit() {
    // do init at here for current route.

    

    setTimeout(() => {
        // this.userTransition.setTransition();
        this.navCtrl.navigateRoot('/login');
    }, 1200);  //1.2s
  }

  

  
}
