import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchResultPage } from './search-result.page';
import { FooterMenuModule } from 'src/app/shared/footer-menu/footer-menu.module';

const routes: Routes = [
  {
    path: '',
    component: SearchResultPage
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
  declarations: [SearchResultPage]
})
export class SearchResultPageModule {}
