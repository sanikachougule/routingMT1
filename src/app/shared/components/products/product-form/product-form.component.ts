import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/shared/models/products.interface';
import { ProductsService } from 'src/app/shared/services/products.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  productForm !: FormGroup;
  productId !: string;
  productObj !: Iproduct;
  isEditMode:boolean = false;
  constructor(
    private _productsServices:ProductsService,
    private _uuidServices:UuidService,
    private _routes: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.createProductForm();
    this.productId= this._routes.snapshot.params['productId'];
    if(this.productId){
      this.isEditMode =true;
      this.productObj = this._productsServices.getProductInfo(this.productId);
      this.productForm.patchValue(this.productObj);
    }else{
      this.isEditMode = false;
    }
  }

  createProductForm(){
    this.productForm = new FormGroup({
      name: new FormControl(null,[Validators.required]),
      price:new FormControl(null,[Validators.required]),
      image:new FormControl(null,[Validators.required]),
      description:new FormControl(null,[Validators.required]),
      progress:new FormControl(null,[Validators.required]),
    })
  }

  onProductAdd(){
    if(this.productForm.valid){
      let newProduct:Iproduct={
        ...this.productForm.value,
        id: this._uuidServices.uuid()
      }
      //console.log(this.productForm.value)
      this._productsServices.addProducts(newProduct);
      this.productForm.reset();
    }
  }

  onUpdateProduct(){
   if(this.productForm.valid){
    let updatedObj:Iproduct = {
      ...this.productForm.value,
      id: this.productId
    }
    console.log(updatedObj);
    this._productsServices.UpdateProduct(updatedObj);
  }
   }
}
