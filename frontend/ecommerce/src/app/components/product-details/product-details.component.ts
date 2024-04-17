import { Component } from '@angular/core';
import { Product } from '../../common/product';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  product = new Product();
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}
  handleProductDetails() {
    const theProductId: any = this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(theProductId).subscribe((data) => {
      this.product = data;
      
    });
  }
  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.handleProductDetails();
    });
  }
}