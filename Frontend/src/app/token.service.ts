import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Authentication_Details } from '../Authentication_Details';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  
// cred = {
//   username: "foo",
//   password: "foo"
// }

  private token!:string;
  constructor(private http:HttpClient){}

  sendTokenRequest(jsonRequestBody:Authentication_Details):Observable<any>{
    
    // code by sir:- (line-1) let jsonRequestBody:any={username:'foo',password:'foo'};
    //for authentication to get token
    let url='http://localhost:8899/authenticate';

    // (if kept line 1 remove the below line and keep this line ..this.http.post(url,jsonRequestBody,{responseType:'text' as 'json'});
    return this.http.post(url,jsonRequestBody);

  }

  sendAuthRequest(){
    //for sending the token with get request
    const headers=new HttpHeaders().set('Authorization',this.token);
    let url='http://localhost:8899/authorize';

    this.http.get(url,{headers,responseType:'text' as 'json'});
  }

  greetFun(headers :HttpHeaders ){

    let url='http://localhost:8899/greet';
    return this.http.get(url,{headers,responseType:'text' as 'json'});
  }
adminFun(headers: HttpHeaders){
  let url='http://localhost:8899/admin';
  return this.http.get(url,{headers,responseType: ' text' as 'json'})
}

extApiFun(){
let url='https://jsonplaceholder.typicode.com/posts';
return this.http.get(url);
}
  // constructor(private http:HttpClient) { }
  
  // token:{"username":"","password":""};
  
  // authenticationSubmit():Observable<Object>{
  //   let url="http://localhost:8899/";
  //  return  this.http.post(url,url);
  // }

}
