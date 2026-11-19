import {Component, input, OnInit} from '@angular/core';
import {EventoResumen} from "../../modelos/evento";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle, IonCol,
  IonGrid,
  IonIcon,
  IonRow
} from "@ionic/angular";
import {BotonMeInteresaComponent} from "../boton-me-interesa/boton-me-interesa.component";
import {BotonAsistireComponent} from "../boton-asistire/boton-asistire.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-tarjeta-evento',
  templateUrl: './tarjeta-evento.component.html',
  styleUrls: ['./tarjeta-evento.component.scss'],
  imports: [
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonIcon,
    IonGrid,
    IonRow,
    IonCol,
    BotonMeInteresaComponent,
    BotonAsistireComponent,
    RouterLink
  ],
})
export class TarjetaEventoComponent  implements OnInit {
  evento = input.required<EventoResumen>();

  constructor() { }

  ngOnInit() {}

}
