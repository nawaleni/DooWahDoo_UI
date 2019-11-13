import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchTitlePage } from './search-title.page';
import { SearchByOptionsModule } from 'src/app/shared/search-options/search-options.module';
import { FooterMenuModule } from 'src/app/shared/footer-menu/footer-menu.module';
import { SearchByAlphabetsModule } from 'src/app/shared/search-alphabets/search-alphabets.module';

const routes: Routes = [
  {
    path: '',
    component: SearchTitlePage
  }
];

@NgModule({
  imports: [
    SearchByOptionsModule,
    FooterMenuModule,
    SearchByAlphabetsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchTitlePage]
})
export class SearchTitlePageModule {}
