import {Component, CUSTOM_ELEMENTS_SCHEMA, input, OnInit} from '@angular/core';
import {FOTOS_PUBLICACION} from "../../datos/fotos-publicacion";
import {PUBLICACIONES} from "../../datos/publicaciones";
import {IonRouterLink} from "@ionic/angular";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-carrusel-galeria',
  templateUrl: './carrusel-galeria.component.html',
  styleUrls: ['./carrusel-galeria.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    IonRouterLink,
    RouterLink
  ],
})
export class CarruselGaleriaComponent  implements OnInit {
  id_evento = input.required<number>();
  ruta  = input.required<string>();
  publicaciones = PUBLICACIONES;
  fotos_publicacion = FOTOS_PUBLICACION;

  constructor() { }

  ngOnInit() {}

}
