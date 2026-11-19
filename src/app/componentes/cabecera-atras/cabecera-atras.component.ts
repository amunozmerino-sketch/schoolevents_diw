import {Component, input, OnInit} from '@angular/core';
import {IonBackButton, IonButtons, IonHeader, IonTitle, IonToolbar} from "@ionic/angular";
import {EventoDetalle} from "../../modelos/evento";

@Component({
  selector: 'app-cabecera-atras',
  templateUrl: './cabecera-atras.component.html',
  styleUrls: ['./cabecera-atras.component.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonTitle
  ],
})
export class CabeceraAtrasComponent  implements OnInit {
  titulo = input.required<string>()

  constructor() { }

  ngOnInit() {}

}
