import { Component } from '@angular/core';
import { TokenService } from '../token.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Authentication_Details } from '../../Authentication_Details';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-token',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './token.component.html',
  styleUrl: './token.component.css'
})
export class TokenComponent {

  constructor(private tokenService:TokenService){}

  details:Authentication_Details=new Authentication_Details("","");

  header!:HttpHeaders;

  getToken(){
    console.log("Details : ",this.details);
    // console.log(this.details);
    this.tokenService.sendTokenRequest(this.details).subscribe((data)=>{
      console.log(data.jwt);
      this.header = new HttpHeaders().set("Authorization","Bearer "+data.jwt);
    });
    
  }


  greet(){
    console.log("In greet of token component ");
    this.tokenService.greetFun(this.header).subscribe(data=> console.log(data));
    //the greet endpoint in the java code ..the code just returns a statement...that statement is stored in the data variable of the subscribe method..which was printed using console.log

  }

  admin(){
    console.log("In the admin of the token component");
    this.tokenService.adminFun(this.header).subscribe(data => console.log(data));
  }
 dummyData:any;
  extApi(){
    this.tokenService.extApiFun().subscribe(data=>
      this.dummyData=data
    );
  }
}
