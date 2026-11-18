import {Component, input, OnInit} from '@angular/core';
import {EventoResumen} from "../../modelos/evento";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle, IonCol,
  IonGrid,
  IonIcon,
  IonRow
} from "@ionic/angular";
import {BotonMeInteresaComponent} from "../boton-me-interesa/boton-me-interesa.component";
import {BotonAsistireComponent} from "../boton-asistire/boton-asistire.component";

@Component({
  selector: 'app-tarjeta-evento',
  templateUrl: './tarjeta-evento.component.html',
  styleUrls: ['./tarjeta-evento.component.scss'],
  imports: [
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonCardSubtitle,
    IonIcon,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    BotonMeInteresaComponent,
    BotonAsistireComponent
  ],
})
export class TarjetaEventoComponent  implements OnInit {
  evento = input.required<EventoResumen>();

  constructor() { }

  ngOnInit() {}

}
