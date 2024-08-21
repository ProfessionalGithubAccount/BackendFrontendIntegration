import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})

export class UpdateComponent {
  prod : Product = new Product("","","",0,0);
  constructor(private productService:ProductService){}
  UpdateProduct(){
    console.log("Bharat update compoent",this.prod);
    this.productService.updateProduct(this.prod).subscribe((data)=>{console.log(data);});

    //The subscirbe is a method which is pushing the data to the backend...teh console.log may or may not be written ..it is just to show the data on browswer console
    //Actually the subscribe method(everywhere) is used to connect to backend ...for access,retreive,delete etc from backend using the connection the subscribe method made
  };
  //This method wont work or show errors...in the browswer console if there is no entry with the id

// Information on subscribe....our methods return Observable objects 
// Observable objects need a call back function
// the subscribe acts as a call back function 
// We can say teh subscribe method acts as an entry point for our observable..

// Then we use data , error(and there associated statements) ...so that if there is an eroor it will tell us ..if not the data gets intialised and returned

// the initailization and returning is important ..so that we can sedn te message like "conform u r details" "successfully entered "
//  etc messages ...which can only be possible if something is returned 

}
