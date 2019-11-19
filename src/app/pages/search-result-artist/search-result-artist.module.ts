import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchResultArtistPage } from './search-result-artist.page';
import { HomeMenuModule } from 'src/app/shared/home-menu/home-menu.module';
import { SearchByOptionsModule } from 'src/app/shared/search-options/search-options.module';
import { FooterMenuModule } from 'src/app/shared/footer-menu/footer-menu.module';

const routes: Routes = [
  {
    path: '',
    component: SearchResultArtistPage
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
  declarations: [SearchResultArtistPage]
})
export class SearchResultArtistPageModule {}
