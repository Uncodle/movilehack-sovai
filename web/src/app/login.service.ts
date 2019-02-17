import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Form } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: Http
  ) { }
  
  public finishLogin( username : String, password : String): Observable<String>{
    let headers: Headers  = new Headers()
    const URL_API = 'http://localhost:3000';

    return this.http.post(
      `${ URL_API }/users`,
      JSON.stringify(`?username=${ username }&password=${ password }`),
      new RequestOptions({ headers: headers })
    )
    .pipe(
        map( ( response: Response ) => {
          return response.json().username;
        })
      )
  }
}
