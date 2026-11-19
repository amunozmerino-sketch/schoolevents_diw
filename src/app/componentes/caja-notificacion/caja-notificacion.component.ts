import {Component, input, OnInit} from '@angular/core';
import {IonIcon} from "@ionic/angular";
import {Notificacion} from "../../modelos/notificacion";

@Component({
  selector: 'app-caja-notificacion',
  templateUrl: './caja-notificacion.component.html',
  styleUrls: ['./caja-notificacion.component.scss'],
  imports: [
    IonIcon
  ],
})
export class CajaNotificacionComponent  implements OnInit {
  notificacionesGrupo = input.required<Notificacion[]>()
  titulo = input.required<string>()

  constructor() { }

  ngOnInit() {}

}
