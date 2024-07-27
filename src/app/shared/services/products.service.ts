import { Injectable } from '@angular/core';
import { Iproduct } from '../models/products.interface';
import { Router } from '@angular/router';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  Products:Array<Iproduct>= [
    {
      id: "1",
      name: 'Apple iPhone 13 Pro(Graphite, 256GB )',
      brand: 'Apple',
      price: 120000,
      image: 'https://i.insider.com/6116b065c040ad0018ce3ea1?width=1009&format=jpeg',
      progress : 'InProgress',
      description:'iPhone 13 Pro. Super Retina XDR display with ProMotion The iPhone 13 Pro display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 6.06 inches diagonally (actual viewable area is less).'
    },             
    {
      id: "2",
      name: 'Samsung Galaxy S21 (Phantom Black, 128GB)',
      brand: 'Samsung',
      price: 72000,
      image: 'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s21-fe-5g.jpg',
      progress : 'Dispatched',
       description:'Unpacking 2021 with a bang, we have the Samsung Galaxy S21 for you today. Samsung has rearranged its yearly release schedule to pull its high-end S-series reveal for January, and could there be a better way to kick off the year'
     
    },
    {
      id: "3",
      name: 'Google Pixel 6 (Sorta Sunny, 128GB )',
      brand: 'Google',
      price: 58200,
      image: 'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iOS/ios16-iphone13-pro-widgets-home-screen.png',
      progress : 'Delivery',
       description:'Unpacking 2021 with a bang, we have the Samsung Galaxy S21 for you today. Samsung has rearranged its yearly release schedule to pull its high-end S-series reveal for January, and could there be a better way to kick off the year'
    },
       {
      id: "4",
      name: 'OnePlus 9 Pro(Morning Mist, 256GB )',
      brand: 'OnePlus',
      price: 67000,
      image: 'https://fdn2.gsmarena.com/vv/bigpic/oneplus-9-pro-.jpg',
      progress : 'Delivery',
       description:'Unpacking 2021 with a bang, we have the Samsung Galaxy S21 for you today. Samsung has rearranged its yearly release schedule to pull its high-end S-series reveal for January, and could there be a better way to kick off the year'
     },
   
    {
      id: "6",
      name: 'Sony Xperia 1 III   (Frosted Black, 256GB )',
      brand: 'Sony',
      price: 90000,
      image: 'https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-1-iii.jpg',
      progress : 'Dispatched',
       description:'Unpacking 2021 with a bang, we have the Samsung Galaxy S21 for you today. Samsung has rearranged its yearly release schedule to pull its high-end S-series reveal for January, and could there be a better way to kick off the year'
    },
    
    {
      id: "7",
      name: 'Motorola Edge+ (Thunder Grey, 256GB ) ',
      brand: 'Motorola',
      price: 53000,
      image: 'https://img.gkbcdn.com/s3/p/2020-12-30/Xiaomi-Mi-11-5G-Smartphone-6-81-Inch-8GB-256GB-Blue-427114-0.jpg',
      progress : 'Delivery',
       description:'Unpacking 2021 with a bang, we have the Samsung Galaxy S21 for you today. Samsung has rearranged its yearly release schedule to pull its high-end S-series reveal for January, and could there be a better way to kick off the year'
    }
  
  ];
 constructor(
     private _router:Router,
     private _snackbar:SnackbarService
 ) { }

 fetchAllProducts():Array<Iproduct>{
    return this.Products
 }

 addProducts(product: Iproduct){
   this.Products.push(product);
    this._router.navigate(['/products'])
    this._snackbar.openSnackBar(`The Product is added successfully !!`)
 } 
  
 getProductInfo(id:string){
  return this.Products.find(prod => prod.id === id) as Iproduct
 }

 UpdateProduct(updatedObj: Iproduct){
  let getIndex= this.Products.findIndex(prod => prod.id === updatedObj.id)

  this.Products[getIndex]= updatedObj;
  this._router.navigate(['/products'])
 
  this._snackbar.openSnackBar(`The Product is ${updatedObj.name} Updated successfully !!`)
 }
 removeProducts(id: string){
  let getIndex= this.Products.findIndex(prod => prod.id === id)
  this.Products.splice(getIndex,1);
  this._router.navigate(['/products'])
  this._snackbar.openSnackBar(`The Product is ${getIndex} Removed  successfully !!`)
 }

}
