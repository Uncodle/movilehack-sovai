import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from  '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form : FormGroup = new FormGroup({
    'username': new FormControl( null, [
      Validators.required
    ] ),
    'password': new FormControl( null, [
      Validators.required
    ] ),
  });

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  public login(): void {
    console.log( this.form );

    if( this.form.status === "INVALID" ){
      this.form.get('username').markAsTouched();
      this.form.get('password').markAsTouched();
    } else {
      this.loginService.finishLogin( this.form.get('username').value, this.form.get('password').value )
      .subscribe( ( response : any ) => {
        console.log( response );
      })
    }

  }

}
