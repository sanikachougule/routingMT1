import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../models/products.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productData !: Array<Iproduct>

  constructor(
    private _productsServices: ProductsService
  ) { }

  ngOnInit(): void {
    this.productData = this._productsServices.fetchAllProducts()
  }

}
