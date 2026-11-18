import { Component, OnInit } from '@angular/core';
import {IonButton, IonIcon} from "@ionic/angular";

@Component({
  selector: 'app-boton-asistire',
  templateUrl: './boton-asistire.component.html',
  styleUrls: ['./boton-asistire.component.scss'],
  imports: [
    IonIcon,
    IonButton
  ],
})
export class BotonAsistireComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
