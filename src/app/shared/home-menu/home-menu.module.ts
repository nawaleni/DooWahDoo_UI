import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import {MatIconModule} from '@angular/material/icon';

import { HomeMenuComponent } from './home-menu.component';

const routes: Routes = [
  {
    path: '',
    component: HomeMenuComponent
  }
];

@NgModule({
  imports:[IonicModule,
    MatIconModule],
    exports:[HomeMenuComponent],
    declarations:[HomeMenuComponent],
    providers:[]
})
export class HomeMenuModule {}
