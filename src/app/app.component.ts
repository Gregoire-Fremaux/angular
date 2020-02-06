import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hide = true;
  title = 'jenk-app';
  email = new FormControl('', [Validators.required, Validators.email]);

  hideForm: Boolean = false;


  mailValue;
  passwordValue;

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  submit(){
    if(this.email.hasError('required')){

    }else{
      this.hideForm = true;
      this.success();
    }
  }

  success(){
    return "OK";
  }


  onKey(event: any) { // without type info
    this.mailValue = event.target.value;
    console.log(this.mailValue)
  }

  onKey2(event: any) { // without type info
    this.passwordValue = event.target.value;
    console.log(this.passwordValue)
  }


}
