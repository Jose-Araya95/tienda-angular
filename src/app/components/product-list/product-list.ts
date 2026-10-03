import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';

  constructor(
    private productService: ProductService,
    private cdr: ChangeDetectorRef // Detector de cambios inyectado
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts(): void {
    this.productService.getProducts().subscribe({
      next: (data: Product[]) => {
        console.log('Datos recibidos:', data);
        this.products = data;
        this.isLoading = false;
        this.cdr.detectChanges(); // Forzar actualización de la pantalla
      },
      error: (error) => {
        console.error('Error HTTP:', error);
        this.errorMessage = 'Ocurrió un error al cargar la información.';
        this.isLoading = false;
        this.cdr.detectChanges(); // Forzar actualización en caso de error
      }
    });
  }
}
