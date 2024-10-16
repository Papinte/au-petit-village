import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons'; 
import { faArrowUpWideShort } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  faSearch = faSearch;
  faArrowUpWideShort = faArrowUpWideShort;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    // Récupérer les produits depuis le service
    this.products = this.productsService.getProducts();
  }
}