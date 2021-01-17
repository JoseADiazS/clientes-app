import { Injectable } from '@angular/core';
import { CLIENTES } from './clientes.json';
import { Cliente } from './cliente'


// Modelo de negocio, donde se establece la informacion que sera
// utilizada por la aplicacion, mas adelante esta ser informacion almacenada
// en una base de datos u otra fuente.
@Injectable({
  providedIn: 'root',
})
export class ClienteService {

  constructor() {}

  getClientes(): Cliente[] {
    return CLIENTES;
  }
  
}
