import { Injectable } from '@angular/core';
import { CLIENTES } from './clientes.json';
import { Cliente } from './cliente';
import { of, Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

// Modelo de negocio, donde se establece la informacion que sera utilizada por
// la aplicacion, mas adelante esta ser informacion almacenada en una base de
// datos u otra fuente.
@Injectable()
export class ClienteService {
  private urlEndpoint:string = 'http://localhost:8080/api/clientes';

  constructor(private http:HttpClient){}

  // Observable esta basado en el patron de diseño observador, sujeto observable
  // Cliente, tenmos tambien observadores se suscriben al sujeto y cuando este
  // cambio se notifica a los observadores. Cuando cambia algun dato en el
  // backend se actualice automaticamente en el lado front sin necesidad de
  // recargar la pagina.
  getClientes(): Observable<Cliente[]> {
    // El paquete of, convierte o crea el flujo observable a partir de los objetos
    // clientes
    //return of(CLIENTES);
    return this.http.get(this.urlEndpoint).pipe(
      map(response => response as Cliente[])
    );
  }
}
