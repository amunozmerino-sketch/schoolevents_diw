import { Component, OnInit } from '@angular/core';
import {IonButton, IonIcon} from "@ionic/angular";

@Component({
  selector: 'app-boton-guardar',
  templateUrl: './boton-guardar.component.html',
  styleUrls: ['./boton-guardar.component.scss'],
    imports: [
        IonButton,
        IonIcon
    ],
})
export class BotonGuardarComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
