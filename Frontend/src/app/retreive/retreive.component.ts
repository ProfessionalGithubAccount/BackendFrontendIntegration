import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-retreive',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './retreive.component.html',
  styleUrl: './retreive.component.css'
})
export class RetreiveComponent implements OnInit {
  
  ngOnInit(): void {
    this.products=this.getProducts();
  }

  products: Product[]=[];
  
  constructor(private service:ProductService)
    {}


getProducts():any{
  this.service.getProducts().subscribe((products)=>{
  this.products=products;
  });
}}
