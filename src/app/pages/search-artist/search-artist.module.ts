import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchArtistPage } from './search-artist.page';
import { SearchByAlphabetsModule } from 'src/app/shared/search-alphabets/search-alphabets.module';
import { FooterMenuModule } from 'src/app/shared/footer-menu/footer-menu.module';
import { SearchByOptionsModule } from 'src/app/shared/search-options/search-options.module';
import { HomeMenuModule } from 'src/app/shared/home-menu/home-menu.module';

const routes: Routes = [
  {
    path: '',
    component: SearchArtistPage
  }
];

@NgModule({
  imports: [
    HomeMenuModule,
    SearchByOptionsModule,
    FooterMenuModule,
    SearchByAlphabetsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchArtistPage]
})
export class SearchArtistPageModule {}
