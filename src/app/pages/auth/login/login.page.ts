import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { NavController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserTransition } from 'src/app/services/user-transition';
import { LoginModel } from '../../../models/loginModel';
import { MusicService } from 'src/app/services/music.service';
import { Music } from 'src/app/models/music';
import { AppParameterService } from 'src/app/services/app-parameter.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginModel : any = null;

  errorMessage: string = '';
  items: string[];

  musicList: Music[];
  filteredMusicList: Music[];

  constructor(
    private authservice: AuthService,
    private alertService: AlertService,
    private navCtrl: NavController,
    private http: HttpClient,
    private userTransition : UserTransition,
    private musicService: MusicService,
    private appParameterService: AppParameterService
    
  ) { }

  ngOnInit() {
    this.initializeItems();
    
  }

  initializeItems() {
    this.musicService.getAllMusic().subscribe({
      next: list => this.appParameterService.musicCatlog = list,
      error: err => this.errorMessage = err,
      complete: () => this.filteredMusicList = this.musicList
    })
  }

  login(form: NgForm){  

    this.authservice.login(form.value.email, form.value.password);
  
     let headers = new HttpHeaders({ responseType : 'text' });

    
    this.http.post('https://webapp-191120202122.azurewebsites.net/api/v1/login', {
          emailId	:	form.value.email,
          password	:	form.value.password
    }).subscribe(
      data => {
        console.log(data);
        this.loginModel = data;
        this.userTransition.setTransition();
        if(this.loginModel.userInfo !=  null){
          this.navCtrl.navigateRoot('/dashboard');
          this.alertService.presentToast('Logged In');
          //this.initializeItems();
        }
        else{
          this.alertService.presentToast("Please enter valid credentials");
        }
      },
      error =>{

        console.log(error);

      }
      );
      

  }


  
  

  register()
  {
    this.navCtrl.navigateRoot('/register');
  }

  
}
