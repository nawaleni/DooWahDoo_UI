import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { AlertService } from 'src/app/services/alert.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  

  constructor(
    private http:HttpClient,
    private alertService: AlertService,
    private navCtrl:NavController,
  ) { }

  ngOnInit() {
  }

  

  register1(form: NgForm){
    var headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');

    let postData = {
      "userProfile":{
        "firstName": "a", //form.value.firstName,
        "lastName":"b",//form.value.lastName,
        "contactNo": 12 //form.value.mobile
      },
	    "signUp":{
        "emailId":"aa", //form.value.email,
        "password": "aa" //form.value.password
      }
    }
    this.http.post('https://doowahdoo-capstone.herokuapp.com/api/v1/employees', postData,
    {headers: {'Content-Type': 'application/json', }}).subscribe( 
      data => {
        this.alertService.presentToast("Registered");
      },
      error =>{
        console.log(error);
      },
      () =>{
        console.log("Success");
        //this.navCtrl.navigateRoot('/dashboard');
      }
      );

  }

  register(form: NgForm){  

    console.log(form.value.firstName);
    console.log(form.value.lastName);
    console.log(form.value.mobile);
    console.log(form.value.email);
    console.log(form.value.password);
    //let headers = new HttpHeaders({ responseType : 'application/json' });

    this.http.post('https://doowahdoo-capstone.herokuapp.com/api/v1/employees', {
    userProfile : {
          firstName : form.value.firstname,
          lastName : form.value.lastname,
          contactNo : form.value.mobile
        },    
    signUp :	{
          emailId	:	form.value.email,
          password	:	form.value.password
        }
        
    }).subscribe(
      data => {
        this.alertService.presentToast("Registered Successfully!");
      },
      error =>{
        console.log(error);
      },
      () =>{
        this.navCtrl.navigateRoot('/login');
      }
    );
  
  }
}
