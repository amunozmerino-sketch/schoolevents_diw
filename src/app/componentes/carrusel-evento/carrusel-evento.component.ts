import {Component, CUSTOM_ELEMENTS_SCHEMA, input, OnInit} from '@angular/core';
import {TarjetaEventoComponent} from "../tarjeta-evento/tarjeta-evento.component";
import {EventoResumen} from "../../modelos/evento";

@Component({
  selector: 'app-carrusel-evento',
  templateUrl: './carrusel-evento.component.html',
  styleUrls: ['./carrusel-evento.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        TarjetaEventoComponent
    ],
})
export class CarruselEventoComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  eventos = input.required<EventoResumen[]>();
}
