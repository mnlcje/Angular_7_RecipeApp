import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

interface AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
  }
  

@Injectable({providedIn:'root'})
export class AuthService
{
    constructor(private httpC : HttpClient){}

    signUp(email:string , password:string)
    {
       return this.httpC.post<AuthResponseData>(
            'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBN0ny45fI_n-jGRQICsUFxGw-5KGACaek',
            {
                email: email,
                password: password,
                returnSecureToken: true 
            }
          )
          .pipe
           (
             catchError(errorRes => {
             let errorMessage = 'An Unknown Error ocurred';
             if(!errorRes.error || !errorRes.error.error)
             {
              return throwError(errorMessage);
             }
             switch(errorRes.error.error.message)
             {
              case 'EMAIL_EXISTS':
               errorMessage = 'This email exists already';
             }
             return throwError(errorMessage);
          })
          )
       }   

}