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
    }, {headers, responseType : 'text'}).subscribe((response) => {
      console.log(response);
    });
  /*
    this.http.post('https://doowahdoo-capstone.herokuapp.com/api/v1/employees', {
        signUp :	{
          emailId	:	'gem@gmail.com',
          password	:	'gemmy2'
        },
        userProfile : {
          firstName : 'Gem',
          lastName : 'Geo',
          contactNo : '3129347351',
          userName : 'gem2'
        }
    }).subscribe((response) => {
      console.log(response);
    });
  */
  }


  login1(form: NgForm){
    this.authservice.login(form.value.email, form.value.password).subscribe(
      data => {
        this.alertService.presentToast("Logged In");
      },
      error =>{
        console.log(error);
      },
      () =>{
        this.navCtrl.navigateRoot('/dashboard');
      }
    )
  }
}
