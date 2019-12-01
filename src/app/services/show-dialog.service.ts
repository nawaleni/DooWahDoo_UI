import { Injectable } from '@angular/core';
import { Dialogs } from '@ionic-native/dialogs';

@Injectable({
  providedIn: 'root'
})
export class ShowDialogService {

  constructor(private dialogs: Dialogs) { }
}
