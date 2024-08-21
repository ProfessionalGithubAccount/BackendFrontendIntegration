// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-create',
//   standalone: true,
//   imports: [],
//   templateUrl: './create.component.html',
//   styleUrl: './create.component.css'
// })
// export class CreateComponent {

// }
import { Component } from '@angular/core';
import { Product } from '../../Product';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';




@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})

export class CreateComponent {
val="";
  prod : Product = new Product("","","",0,0);
  productData:Product[] = []; 

constructor(private productService:ProductService){}

// The baove constructor is injectimg teh data to the servcie folder....because everything should happen through service itself
countt=0;
myFunction(event:any):void{
  this.val = event.target.value;
  this.countt = this.productData.filter((i) => i.brand == this.val).length;
}

onSubmit():void{
  console.log(this.prod);
  this.productData.push(this.prod);
  console.log(this.productData);
  this.productService.saveProduct(this.prod).subscribe(
    (data)=>{console.log(data);},
    // (error)=>{console.error(error);}
  );
}
}