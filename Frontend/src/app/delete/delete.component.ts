import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent {
  productId: number = 0;
  product: any;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  DeleteProduct(): void {
    this.productService.deleteProd(this.productId).subscribe(
      (data) => {
        console.log("Product Deleted Successfully");
      },
      (error) => {
        console.log('Error retrieving product:', error);
      }
    );
  }

}
