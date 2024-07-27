import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/shared/models/products.interface';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
   productId !: string;
   productObj !: Iproduct;

  constructor(
    private _routes:ActivatedRoute,
    private _productsServices: ProductsService
  ) { }

  ngOnInit(): void {
    this.productId = this._routes.snapshot.params['productId'];
    console.log(this.productId);
    if(this.productId){
      this.productObj= this._productsServices.getProductInfo(this.productId);
    }
  }

  onRemoveProduct(){
    let getConfirm= confirm('Are you sure the remove this data !!');
    if(getConfirm){
      this._productsServices.removeProducts(this.productId)
    }
  }

}
