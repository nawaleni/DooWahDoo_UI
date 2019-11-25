import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserTransition } from 'src/app/services/user-transition';
import { User } from 'src/app/models/user';


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
    private userTransition : UserTransition
  ) { }

  ngOnInit() {
    
  }

  login(form: NgForm){  
  
    let headers = new HttpHeaders({ responseType : 'text' });


    this.http.post('https://webapp-191120202122.azurewebsites.net/api/v1/login', {
          emailId	:	form.value.email,
          password	:	form.value.password
    }, {headers, responseType : 'text'}).subscribe(
      data => {
        console.log(data);
        this.userTransition.setTransition();
        this.navCtrl.navigateRoot('/dashboard');
        this.alertService.presentToast('Logged In');
        
      },
      error =>{

        console.log(error);

      },

      () =>{

        
        // Hello

      }
      );

  }



  register()
  {
    this.navCtrl.navigateRoot('/register');
  }
}
