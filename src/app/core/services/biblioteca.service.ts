import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Biblioteca, BibliotecaRequest } from '../models/biblioteca.model';

@Injectable({ providedIn: 'root' })
export class BibliotecaService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/bibliotecas`;

  listar(): Observable<Biblioteca[]> {
    return this.http.get<Biblioteca[]>(this.baseUrl);
  }

  crear(datos: BibliotecaRequest): Observable<Biblioteca> {
    return this.http.post<Biblioteca>(this.baseUrl, datos);
  }
}
