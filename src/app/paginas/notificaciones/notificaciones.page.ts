import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonContent, IonHeader, IonIcon, IonLabel, IonSegment, IonSegmentButton, IonToolbar} from '@ionic/angular';
import {CabeceraAtrasComponent} from "../../componentes/cabecera-atras/cabecera-atras.component";
import {NOTIFICACIONES} from "../../datos/notificaciones";
import {CajaNotificacionComponent} from "../../componentes/caja-notificacion/caja-notificacion.component";

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
  imports: [IonContent, IonHeader, IonToolbar, CommonModule, FormsModule, CabeceraAtrasComponent, IonLabel, IonSegmentButton, IonSegment, IonIcon, CajaNotificacionComponent]
})
export class NotificacionesPage implements OnInit {
  notificaciones = NOTIFICACIONES
  filtro = 'todas';

  get visibles() { return this.filtro === 'todas' ? this.notificaciones : this.notificaciones.filter(n => !n.leida); }
  get hoy() { return this.visibles.filter(n => n.grupo === 'Hoy'); }
  get semana() { return this.visibles.filter(n => n.grupo === 'Esta semana'); }
  get mes() { return this.visibles.filter(n => n.grupo === 'Este mes'); }

  constructor() { }

  ngOnInit() {
  }

}
