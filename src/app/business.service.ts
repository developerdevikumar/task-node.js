
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  uri = 'http://localhost:4000/business';

  constructor(private http: HttpClient) { }

  addBusiness(product_name, product_category, product_Price, product_Size, product_stock, product_description) {
    const obj = {
      product_name: product_name,
      product_category: product_category,
      product_Price: product_Price,
      product_Size: product_Size,
      product_stock: product_stock,
      product_description:product_description
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }

getBusinesses() {
  return this
         .http
         .get(`${this.uri}`);
}
editBusiness(id) {
  return this
          .http
          .get(`${this.uri}/edit/${id}`);
  }
  updateBusiness(product_name, product_category, product_Price, product_Size, product_stock, product_description, id) {

    const obj = {
      product_name: product_name,
      product_category: product_category,
      product_Price: product_Price,
      product_Size: product_Size,
      product_stock: product_stock,
      product_description:product_description
      };
      this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }

 deleteBusiness(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}