import { NgModule, Output } from '@angular/core';
import { FooterMenuComponent } from './footer-menu.component';
import { IonicModule, NavController } from '@ionic/angular';


@NgModule({
    imports:[IonicModule],
    exports:[FooterMenuComponent],
    declarations:[FooterMenuComponent],
    providers:[]
})
export class FooterMenuModule{

    
}