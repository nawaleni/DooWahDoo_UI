import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchResultPage } from './search-result.page';
import { FooterMenuModule } from 'src/app/shared/footer-menu/footer-menu.module';
import { SearchByOptionsModule } from 'src/app/shared/search-options/search-options.module';
import { HomeMenuModule } from 'src/app/shared/home-menu/home-menu.module';

const routes: Routes = [
  {
    path: '',
    component: SearchResultPage
  }
];

@NgModule({
  imports: [
    HomeMenuModule,
    SearchByOptionsModule,
    FooterMenuModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchResultPage]
})
export class SearchResultPageModule {}
