import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { EnvService } from './env.service'
import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  token: any;

  constructor(
    private http: HttpClient,
    private storage: NativeStorage,
    private env: EnvService,
  ) { }

login(email: any, password: any){
  let headers = new HttpHeaders({ responseType : 'text' });

  return this.http.post('https://webapp-191120202122.azurewebsites.net/api/v1/login',
  {emailId: email, password: password}, { responseType : 'text' }
  ).pipe(
    tap(token => {
      this.storage.setItem('token', token)
      .then(
        () => {
          console.log('Token Stored is ' + token);
        },
        error => console.error('Error storing item', error)
        );
      this.token = token;
      this.isLoggedIn = true;
      return token;
    }),
  )
  .subscribe(
    data => {
      console.log(data);
    },
    error => console.log(error),
    () =>{

    }
  );
}

//register user

register(user: User){
  return true;
  //this.http.post(this.env)
}

}
