import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchGenrePage } from './search-genre.page';
import { SearchByOptionsModule } from 'src/app/shared/search-options/search-options.module';
import { FooterMenuModule } from 'src/app/shared/footer-menu/footer-menu.module';

const routes: Routes = [
  {
    path: '',
    component: SearchGenrePage
  }
];

@NgModule({
  imports: [
    SearchByOptionsModule,
    FooterMenuModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchGenrePage]
})
export class SearchGenrePageModule {}
