import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    const productTitle = this.route.snapshot.paramMap.get('title'); // Récupère le paramètre title
    
    this.productsService.getProducts().subscribe((products) => {
      this.product = products.find(p => p.title === productTitle); // Cherche le produit par son titre
    });
  }
}
