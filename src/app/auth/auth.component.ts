import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService, private router: Router) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) return;
    const { email, password } = form.value;

    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;
    if (this.isLoginMode) {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signup(email, password);
    }

    // authObs.subscribe(
    //   (resData) => {
    //     console.log(resData);
    //     this.isLoading = false;
    //   },
    //   (errorMessage) => {
    //     console.log(errorMessage);

    //     this.error = errorMessage;
    //     this.isLoading = false;
    //   }
    // );

    authObs.subscribe({
      next: (resData) => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      error: (errorMessage) => {
        this.isLoading = false;
        this.error = errorMessage;
      },
    });

    form.reset();
  }

  onHandleError() {
    this.error = null;
  }
}
