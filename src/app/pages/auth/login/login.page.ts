import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private authservice: AuthService,
    private alertService: AlertService,
    private navCtrl: NavController,
    private http: HttpClient,
    private nativePageTransitions: NativePageTransitions
  ) { }

  ngOnInit() {
  }

  login(form: NgForm){  

    let headers = new HttpHeaders({ responseType : 'text' });
    
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 1000,
      slowdownfactor: 3,
      slidePixels: 20,
      iosdelay: 100,
      androiddelay: 150,
      fixedPixelsTop: 0,
      fixedPixelsBottom: 60
     };

    this.http.post('https://doowahdoo-capstone.herokuapp.com/api/v1/login', {
          emailId	:	form.value.email,
          password	:	form.value.password
    }, {headers, responseType : 'text'}).subscribe( 
      data => {
        console.log(data);
        this.alertService.presentToast("Logged In");
      },
      error =>{
        console.log(error);
      },
      () =>{
        this.nativePageTransitions.drawer(options);
        this.navCtrl.navigateRoot('/dashboard');
        //Hello
      }
      );
  
  }



  register()
  {
    this.navCtrl.navigateRoot('/register');
  }
}
