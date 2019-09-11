import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/almacen.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public products;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProduct().subscribe(
      data=> { this.products= data},
      err => console.error(err),
      () => console.log('productos cargados')

    )
  }
}
