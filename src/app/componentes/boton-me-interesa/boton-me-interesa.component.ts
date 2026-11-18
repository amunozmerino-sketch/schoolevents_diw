import { Component, OnInit } from '@angular/core';
import {IonButton, IonIcon} from "@ionic/angular";

@Component({
  selector: 'app-boton-me-interesa',
  templateUrl: './boton-me-interesa.component.html',
  styleUrls: ['./boton-me-interesa.component.scss'],
  imports: [
    IonButton,
    IonIcon
  ],
})
export class BotonMeInteresaComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
