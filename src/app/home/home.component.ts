import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  products: any[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    // Récupérer les produits depuis le service
    this.products = this.productsService.getProducts();
  }
}