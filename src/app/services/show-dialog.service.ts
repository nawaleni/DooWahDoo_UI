import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { async } from 'q';

@Injectable({
  providedIn: 'root'
})
export class ShowDialogService {

  constructor(
    private alertCtrl: AlertController) { }

  async promptAlert(): Promise<any>
  {
    return new Promise(async (resolve) => {
      const alert = await this.alertCtrl.create({
        header: 'Confirm!',
        message: 'Are you sure you want to sing this song? ',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              resolve('Cancel');
            }
          }, {
            text: 'Okay',
            handler: () => {
              resolve('Okay');
            }
          }
        ]
      });
      await alert.present();
    });

  }
}
