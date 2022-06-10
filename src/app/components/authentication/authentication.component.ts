import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  public registerValid = false;
  public registerError = false;

  //Show hide div variables
  userlogin = true
  userregister = false
  hide = true

  //Buttons clicks functionalities
  user_register() {
    this.userlogin = false
    this.userregister = true
  }

  user_login() {
    this.userlogin = true
    this.userregister = false
  }

  public email: string = ''
  public password: string = ''


  public onSubmit(): void {

    if (this.userlogin) {

      let user: User = { email: this.email, password: this.password };
      this.loginService.login(user).subscribe({
        next: user => {
          console.log(user);
          this.router.navigate(['/home']);
        },
        error: err => { console.log(err); }
      });

    } else if (this.userregister) {

      let user: User = { email: this.email, password: this.password };
      this.loginService.register(user).subscribe(
        {
          next: () => { this.registerValid = true },
          error: err => { console.log('Register Error', err); this.registerError = true }
        });

    }

  }

}

