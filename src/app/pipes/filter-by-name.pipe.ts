import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName',
  pure: false // Pour qu'il se mette à jour à chaque changement
})
export class FilterByNamePipe implements PipeTransform {
  transform(products: any[], searchTerm: string): any[] {
    if (!products || !searchTerm) {
      return products; // Retourne tous les produits si aucun terme de recherche
    }

    const lowercasedTerm = searchTerm.toLowerCase();

    return products.filter(product =>
      product.title.toLowerCase().includes(lowercasedTerm) // Filtrer par titre
    );
  }
}