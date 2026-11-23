import { Component, computed, input } from '@angular/core';
import { Biblioteca } from '../../core/models/biblioteca.model';

@Component({
  selector: 'app-libros-tabla',
  standalone: true,
  templateUrl: './libros-tabla.component.html',
  styleUrl: './libros-tabla.component.css',
})
export class LibrosTablaComponent {
  readonly bibliotecas = input.required<Biblioteca[]>();

  protected readonly filas = computed(() =>
    this.bibliotecas().flatMap((biblioteca) =>
      biblioteca.libros.map((libro) => ({ ...libro, biblioteca: biblioteca.nombre })),
    ),
  );
}
