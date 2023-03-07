import { Component, Input, OnInit } from '@angular/core';
import { IVenta } from '../Interfaces/IVenta';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {
  @Input() producto?: IVenta
  constructor() { }

  ngOnInit(): void {
  }

}
