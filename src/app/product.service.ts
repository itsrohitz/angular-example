import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getProduct(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  get1(){
    return this.http.get('https://fakestoreapi.com/products');
  }
}
