import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Product } from '../Product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  saveProduct(product:Product):Observable<Object>{
    let url="http://localhost:8090/product/api.1.0/create";
   return  this.http.post(url,product);
  }

 
  deleteProd(id:number):Observable<Object>{
    return this.http.delete(`http://localhost:8090/product/api.1.0/delete/${id}`);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:8090/product/api.1.0/fetchall");
  }

  updateProduct(product: Product): Observable<Object> {
    console.log("In the updatepRoduct method",product);
    
    return this.http.put("http://localhost:8090/product/api.1.0/update",product);
  }

}
