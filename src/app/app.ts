import { Component, OnInit, inject, signal } from '@angular/core';
import { Biblioteca } from './core/models/biblioteca.model';
import { BibliotecaService } from './core/services/biblioteca.service';
import { BibliotecaFormComponent } from './features/bibliotecas/biblioteca-form.component';
import { LibrosTablaComponent } from './features/bibliotecas/libros-tabla.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BibliotecaFormComponent, LibrosTablaComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  private readonly bibliotecaService = inject(BibliotecaService);

  protected readonly bibliotecas = signal<Biblioteca[]>([]);
  protected readonly errorMessage = signal<string | null>(null);

  ngOnInit(): void {
    this.cargar();
  }

  protected cargar(): void {
    this.bibliotecaService.listar().subscribe({
      next: (bibliotecas) => {
        this.errorMessage.set(null);
        this.bibliotecas.set(bibliotecas);
      },
      error: () => this.errorMessage.set('No se pudieron cargar los libros.'),
    });
  }
}
