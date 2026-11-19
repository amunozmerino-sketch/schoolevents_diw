import {Component, input, OnInit} from '@angular/core';
import {IonButton, IonIcon, IonRouterLink} from "@ionic/angular";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-carrusel-encabezado',
  templateUrl: './carrusel-encabezado.component.html',
  styleUrls: ['./carrusel-encabezado.component.scss'],
    imports: [
        IonButton,
        IonIcon,
        IonRouterLink,
        RouterLink
    ],
})
export class CarruselEncabezadoComponent  implements OnInit {
  titulo = input.required<string>();
  ruta = input.required<string>();

  constructor() { }

  ngOnInit() {}

}
