import { Component, inject, output, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { BibliotecaService } from '../../core/services/biblioteca.service';

@Component({
  selector: 'app-biblioteca-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './biblioteca-form.component.html',
  styleUrl: './biblioteca-form.component.css',
})
export class BibliotecaFormComponent {
  private readonly fb = inject(FormBuilder);
  private readonly bibliotecaService = inject(BibliotecaService);

  readonly creada = output<void>();

  protected readonly loading = signal(false);
  protected readonly errorMessage = signal<string | null>(null);
  protected readonly successMessage = signal<string | null>(null);

  protected readonly form = this.fb.nonNullable.group({
    nombre: ['', [Validators.required]],
    direccion: ['', [Validators.required]],
    ciudad: ['', [Validators.required]],
  });

  protected submit(): void {
    if (this.form.invalid || this.loading()) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading.set(true);
    this.errorMessage.set(null);
    this.successMessage.set(null);

    this.bibliotecaService.crear(this.form.getRawValue()).subscribe({
      next: () => {
        this.loading.set(false);
        this.successMessage.set('Biblioteca registrada correctamente.');
        this.form.reset();
        this.creada.emit();
      },
      error: () => {
        this.loading.set(false);
        this.errorMessage.set('No se pudo registrar la biblioteca. Intenta de nuevo más tarde.');
      },
    });
  }
}
