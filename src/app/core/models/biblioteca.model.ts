import { Libro } from './libro.model';

export interface Biblioteca {
  id: number;
  nombre: string;
  direccion: string;
  ciudad: string;
  libros: Libro[];
}

export interface BibliotecaRequest {
  nombre: string;
  direccion: string;
  ciudad: string;
}
