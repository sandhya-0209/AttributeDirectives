import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  //Attribute Dirctives
  productName : string = "samsung";
  productId : number = 1234;
  isProductAvailable !: boolean;

  constructor() { }

  ngOnInit(): void {
     this.isProductAvailable = Math.random() >= .5 ? true : false;
  }

  //if we want to use as a function
  // setBgColor(): string{
  //   return this.isProductAvailable ? 'orange' : '#ededed'
  // }

  // if we don't want to treat funcion as a function 
  // get setBgColor(): string{
  //   return this.isProductAvailable ? 'orange' : '#ededed'
  // }


}
