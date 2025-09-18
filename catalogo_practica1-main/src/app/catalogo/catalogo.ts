import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Producto } from '../modelos/producto';
import { ProductoService } from '../servicios/producto';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './catalogo.html',
  styleUrls: ['./catalogo.css']
})
export class CatalogoComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private productoService: ProductoService) {}

  async ngOnInit() {
    this.productos = await this.productoService.getProductos();
  }
}
