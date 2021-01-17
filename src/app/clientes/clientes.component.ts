import { Component, OnInit } from '@angular/core';
import { Cliente} from './cliente';
import { ClienteService } from './cliente.service';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];
  // Se esta inyectando la dependencia de la lista de clientes 
  // de esta manera se mantiene separada la capa de datos de la de control
  constructor(private ClienteService: ClienteService) { }

  ngOnInit(): void {
      this.ClienteService.getClientes().subscribe(
        // => Este comando se usa para asignar un parametro funciones anonimas o
        // de arrow
        // Este es el observador
      clientes => this.clientes = clientes

      // Este funcion podria ser reemplazada por:
      // function (clientes){
      //   this.clientes = clientes
      // }

      // Ctrl-K y Ctrl-C para comentar
     );
  }

}
