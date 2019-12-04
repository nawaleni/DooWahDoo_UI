import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { AlertService } from "../../../services/alert.service";
import { NavController } from '@ionic/angular';
import { User } from '../../../models/user';
import { UserTransition } from 'src/app/services/user-transition';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  

  userProfile : User = {
    firstName : null,
    lastName : null,
    city : null,
    email : null,
    mobile : null,
    password : null,
    zip : null
  };
  
  constructor(
    private http:HttpClient,
    private userTransition: UserTransition, 
    private alertService: AlertService,
    private navCtrl:NavController,
  ) { }

  ngOnInit() {
  }

  register(form: NgForm){  
    console.log(this.userProfile.firstName);
    console.log(form.value.zip);
    console.log(this.userProfile.password)
    this.http.post('https://webapp-191120202122.azurewebsites.net/api/v1/RegisterUser', {
    userProfile : {
          firstName : this.userProfile.firstName,
          lastName : this.userProfile.lastName,
          contactNo : this.userProfile.mobile
        },    
    signUp :	{
          emailId	:	this.userProfile.email,
          password	:	this.userProfile.password
        }
        
    }).subscribe(
      data => {
        this.alertService.presentToast("Registered Successfully!");
      },
      error =>{
        console.log(error);
        this.alertService.presentToast(error);
      },
      () =>{

        this.userTransition.setTransition();
        this.navCtrl.navigateRoot('/login');
      }
    );
  
  }

  goToLogin() {
    this.userTransition.setTransition();
    this.navCtrl.navigateRoot('/login');
  }
}
