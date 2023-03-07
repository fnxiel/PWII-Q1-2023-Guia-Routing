import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IVenta } from '../Interfaces/IVenta';

@Component({
  selector: 'app-pantallauno',
  templateUrl: './pantallauno.component.html',
  styleUrls: ['./pantallauno.component.css']
})
export class PantallaunoComponent implements OnInit {
  nombreUsuario: string = 'Anónimo'
  ventasFiltradas?: IVenta[]
  ventas: IVenta[] = [
    {
      nombre: "Teclado",
      descripcion: "Teclado de muchas teclas",
      cantidad: 3
    },
    {
      nombre: "Mouse",
      descripcion: "Mouse con muchas pero muchas teclas",
      cantidad: 2
    },
    {
      nombre: "Monitor",
      descripcion: "Un monitor grande",
      cantidad: 1
    },
    {
      nombre: "Teclado",
      descripcion: "Teclado de muchas teclas",
      cantidad: 3
    },
    {
      nombre: "Mouse",
      descripcion: "Mouse con muchas pero muchas teclas",
      cantidad: 2
    },
    {
      nombre: "Monitor",
      descripcion: "Un monitor grande",
      cantidad: 1
    },
  ]

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if(params['usuario']){
        this.nombreUsuario = params['usuario']
      }
      //Cantidad de ventas
      if(params['cantidad']){
        this.ventasFiltradas = this.ventas.filter(producto => producto.cantidad >= params['cantidad'])
      }else{
        this.ventasFiltradas = this.ventas
      }
    })
  }

}
