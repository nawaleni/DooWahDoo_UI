import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AppParameterService } from 'src/app/services/app-parameter.service';

@Component({
  selector: 'app-search-title',
  templateUrl: './search-title.page.html',
  styleUrls: ['./search-title.page.scss'],
})
export class SearchTitlePage implements OnInit {

  constructor(private navCtrl:NavController, private appParameterService: AppParameterService) { }

  ngOnInit() {
    this.appParameterService.clickedFrom = 'title';
  }

  


}
