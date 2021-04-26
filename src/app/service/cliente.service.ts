import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Cliente } from '../Model/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }


  getAllCliente(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>('http://localhost:8080/clientes')
  }

  getByIdCliente(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`http://localhost:8080/clientes/${id}`)

  }

  getByTelefone(telefone: string): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`http://localhost:8080/clientes/telefone/${telefone}`)
  }

  postCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>('http://localhost:8080/clientes', cliente)
  }

  putCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>('http://localhost:8080/clientes', cliente)
  }

  deleteCliente(id: number) {
    return this.http.delete(`http://localhost:8080/clientes/${id}`)
  }
}