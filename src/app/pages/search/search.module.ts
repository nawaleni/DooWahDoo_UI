import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchPage } from './search.page';
import { FooterMenuModule } from 'src/app/shared/footer-menu/footer-menu.module';
import { SearchByOptionsModule } from 'src/app/shared/search-options/search-options.module';

const routes: Routes = [
  {
    path: '',
    component: SearchPage
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
  declarations: [SearchPage]
})
export class SearchPageModule {}
