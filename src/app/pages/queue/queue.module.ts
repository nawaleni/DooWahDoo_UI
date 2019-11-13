import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { QueuePage } from './queue.page';
import { FooterMenuModule } from 'src/app/shared/footer-menu/footer-menu.module';

const routes: Routes = [
  {
    path: '',
    component: QueuePage
  }
];

@NgModule({
  imports: [
    FooterMenuModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [QueuePage]
})
export class QueuePageModule {}
