import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estado } from '../modules/estado.br';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private http: HttpClient) { }

  getEstadoBr() {
    return this.http.get<Estado>('assets/dados/estadosbr.json').pipe();
  }
}
