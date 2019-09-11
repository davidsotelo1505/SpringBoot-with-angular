import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) {
   
    }
    getProduct(){
      return this.http.get('/server/product');
   }
   getProductById(id: number){
    return this.http.get('/server/product'+ id);
   }

   createProduct(product){
     let body =JSON.stringify(product);
    return this.http.post('/server/product', body, httpOptions);
   }


}
