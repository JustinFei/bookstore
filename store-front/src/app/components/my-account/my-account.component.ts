import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppConst } from '../../constants/app-const';
import { LoginService } from '../../services/login.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  public serverPath = AppConst.serverPath;
  public loginError: boolean;
  public loggedIn = false;
  public credential = {'username':'', 'password':''};
  
  public emailSent = false;
  public usernameExists: boolean;
  public emailExists: boolean;
  
  public recoverEmail: string;
  public emailNotExists: boolean;
  public forgetPasswordEmailSent: boolean;
  
  public username: string;
  public email: string;
  
  
  constructor(private loginService: LoginService, private userService:UserService, private router: Router) { }
  
  onLogin(){
	  this.loginService.sendCredential(this.credential.username, this.credential.password).subscribe(
		res => {
			console.log(res);
			localStorage.setItem("xAuthToken", res.json().token);
			this.loggedIn = true;
			location.reload();
			this.router.navigate(['/home']);
		},
		error => {
			this.loggedIn = false;
			this.loginError = true;
		}
	  );
  }
  
  onNewAccount(){
	  this.usernameExists = false;
	  this.emailExists = false;
	  this.emailSent = false;
	  
	  this.userService.newUser(this.username, this.email).subscribe(
		res => {
			console.log(res);
			this.emailSent = true;
		},
		error => {
			console.log(error.text());
			let errorMessage = error.text();
			if(errorMessage == "usernameExists") this.usernameExists = true;
			if(errorMessage == "emailExists") this.emailExists = true;
		}
	  );
  }
  
  onForgetPassword(){
	  this.forgetPasswordEmailSent = false;
	  this.emailNotExists = false;
	  
	  this.userService.retrievePassword(this.recoverEmail).subscribe(
		res => {
			console.log(res);
			this.forgetPasswordEmailSent = true;
		},
		error => {
			console.log(error.text());
			let errorMessage = error.text();
			if(errorMessage == "emailNotExists") this.emailNotExists = true;
		}
	  );
  }

  ngOnInit() {
	  this.loginService.checkSession().subscribe(
		res => {
			this.loggedIn = true;
		},
		error => {
			this.loggedIn = false;
		}
	  );
  }

}
