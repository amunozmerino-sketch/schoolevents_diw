import { Component, OnInit } from '@angular/core';
import {IonButton, IonIcon} from "@ionic/angular";

@Component({
  selector: 'app-boton-cancelar',
  templateUrl: './boton-cancelar.component.html',
  styleUrls: ['./boton-cancelar.component.scss'],
    imports: [
        IonButton,
        IonIcon
    ],
})
export class BotonCancelarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
