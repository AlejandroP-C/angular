import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor( private loginService: LoginService ) { }

  ngOnInit() {

  }

  onSubmit(contanctoForm: NgForm) {

    let token = this.loginService.getToken();
    
    const url = `https://projecteangular-7effc-default-rtdb.firebaseio.com/contact.json?auth=${token}`;

    fetch(url, {
        method: "post",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(contanctoForm.value)
        })
        .then((response) => response.json())
        .then((datos) => {

        })
    ;

    setTimeout(() => {
      window.location.reload()
    }, 800);

  }

  public name: string = '';
  public email: string = '';
  public message: string = '';

}