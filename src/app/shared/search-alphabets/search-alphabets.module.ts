import { NgModule, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { SearchByAlphabetsComponent } from './search-alphabets.component';
import { AppParameterService } from 'src/app/services/app-parameter.service';


@NgModule({
    imports:[IonicModule],
    exports:[SearchByAlphabetsComponent],
    declarations:[SearchByAlphabetsComponent],
    providers:[]
})
export class SearchByAlphabetsModule{

    
}