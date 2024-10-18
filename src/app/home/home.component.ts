import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faArrowUpWideShort } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = []; // Produits filtrés et triés à afficher
  faSearch = faSearch;
  faArrowUpWideShort = faArrowUpWideShort;

  sortOrder: 'asc' | 'desc' = 'asc'; // Par défaut, tri croissant
  searchTerm: string = ''; // Terme de recherche

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((products) => {
      this.products = products;
      this.updateFilteredProducts();
    });
  }

  // Change l'ordre du tri entre croissant et décroissant
  toggleSortOrder(): void {
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    this.updateFilteredProducts();
  }

  // Méthode appelée lors de la soumission de la barre de recherche
  onSearchSubmit(event: Event): void {
    event.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire
    this.updateFilteredProducts(); // Mets à jour la liste filtrée et triée
  }

  // Mets à jour la liste filtrée et triée des produits
  updateFilteredProducts(): void {
    this.filteredProducts = this.products
      .filter(
        (product) =>
          product.title.toLowerCase().includes(this.searchTerm.toLowerCase()) // Filtre par le terme de recherche
      )
      .sort((a, b) => {
        if (this.sortOrder === 'asc') {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
  }
}
