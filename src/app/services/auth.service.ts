import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { EnvService } from './env.service';
import { User } from '../models/user';
import { AlertService } from 'src/app/services/alert.service';
import { NavController } from '@ionic/angular';
import { UserTransition } from './user-transition';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  token: any;

  constructor(
    private userTransition: UserTransition,
    private navCtrl: NavController,
    private alertService: AlertService,
    private http: HttpClient,
    private storage: NativeStorage,
    private env: EnvService,
  ) { }

login(email: any, password: any){
  let headers = new HttpHeaders({ responseType : 'text' });

  this.http.post('https://webapp-191120202122.azurewebsites.net/api/v1/login', {
    emailId: email, password: password
  },
  {
    responseType : 'json'
  }
  )
  .subscribe(
    data => {
      console.log(data);

      let userData: any = data;
      console.log("JSON: " + userData.Status);
      if (userData.Status != 'Success') {
          this.alertService.presentToast(userData.Status);
      }
      else
      {

        this.storage.setItem('userId', userData.userInfo.userProfile.userId)
        .then(
          () => {
            this.storage.getItem('userId')
            .then(
              (val) => console.log('Storage: ' + val),
              error => console.log(error)
            );
          },
          errorData => console.log(errorData)

        );
        this.userTransition.setTransition();
        this.navCtrl.navigateRoot('/dashboard');
        this.alertService.presentToast('Logged In');
      }



    },
    error => console.log(error),
    () => {

    }



  );
}
  successfulSet() {
    this.storage.getItem('status')
    .then(
      val => console.log('Storage: ' + val)
    )
    .catch(
      err => console.log(err)
    );
  }


  catchError(arg0: string, status: any, successfulSet: any, catchError: any) {
    throw new Error("Method not implemented.");
  }

//register user

register(user: User){
  return true;
  //this.http.post(this.env)
}

}
