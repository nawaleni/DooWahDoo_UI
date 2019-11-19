import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { NavController } from '@ionic/angular';
import { NgForm } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private authservice: AuthService,
    private alertService: AlertService,
    private navCtrl:NavController,
    private http:HttpClient
  ) { }

  ngOnInit() {
  }

  login(form: NgForm){  

    let headers = new HttpHeaders({ responseType : 'text' });

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
        this.navCtrl.navigateRoot('/dashboard');
      }
      );
  
  }

  register()
  {
    this.navCtrl.navigateRoot('/register');
  }
}
