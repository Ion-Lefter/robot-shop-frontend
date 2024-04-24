import { Component, Input } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  @Input() productDetail!: IProduct;


  getImageUrl(product: IProduct){
    if(!product) return '';
    return '/assets/images/robot-parts/' + product?.imageName
  }

  getDiscountedClasses(product: IProduct){
    if(product?.discount > 0)
      return ['strikethrough']
    else
      return [];
  }

  addToCart(product: IProduct){

  }
}
