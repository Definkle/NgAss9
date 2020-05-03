import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f', { static: true }) signUpForm: NgForm;
  submitted = false;
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  defaultSubscription = 'Advanced';
  user = {
    subscription: '',
    email: '',
    password: '',
  }
  onSubmit() {
    this.submitted = true;
    this.user.subscription = this.signUpForm.value.userData.subscription;
    this.user.email = this.signUpForm.value.userData.email;
    this.user.password = this.signUpForm.value.userData.password;
    console.log(this.signUpForm.value.userData);
    this.signUpForm.reset();
  }
}
