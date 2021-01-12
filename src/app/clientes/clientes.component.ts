import { Component, OnInit } from '@angular/core';
import { Cliente} from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [
    {id:1,nombre:'Jose',apellido:'Diaz',email:'josediaz4297@gmail.com',createAt:'2021-01-12'},
    {id:2,nombre:'Wendy',apellido:'Peñarete',email:'wp@gmail.com',createAt:'2021-01-12'},
    {id:3,nombre:'Rasmus',apellido:'Lerdford',email:'juribe@idiomas.udea.edu.co',createAt:'2021-01-12'},
    {id:4,nombre:'Herlaynne',apellido:'Lerdford',email:'hersy@epm.net.co',createAt:'2021-01-12'},
    {id:5,nombre:'ibrahin',apellido:'tamayo',email:'ibrahin@cied.rimed.cu',createAt:'2021-01-12'},
    {id:6,nombre:'Herlaynne',apellido:'Lerdford',email:'hersy@epm.net.co',createAt:'2021-01-12'},
    {id:7,nombre:'Jorge',apellido:'Zapata',email:'menadel@hotmail.com',createAt:'2021-01-12'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
