import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from './auth.service';
import { Observable } from 'rxjs';

@Component({
    selector:'app-auth',
    templateUrl:'./auth.component.html'
})
export class AuthComponent
{
    isLoginMode = true;
    isLoading = false;
    error : string = null;

    constructor(private authService : AuthService){}

    onSwitchMode()
    {
        this.isLoginMode = ! this.isLoginMode;
    }

    onSubmit(form : NgForm)
    {
        if(!form.valid){
            return;
        }

        const email = form.value.email;
        const password = form.value.password;

        let authObs = new Observable<AuthResponseData>();

        this.isLoading = true;

        if(this.isLoginMode){
           authObs =  this.authService.login(email,password);
        }
        else
        {
           authObs =  this.authService.signUp(email,password);           
        }
        
        authObs.subscribe(
                res => {
                    console.log(res);
                    this.isLoading = false;
                    this.error = null;
                },
                err => {
                    console.log(err);
                    this.isLoading = false;
                    this.error = err;
                }
            );   
        
        form.reset();        
    }
}