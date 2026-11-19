import {Component, computed, input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonContent, IonHeader, IonItem, IonLabel, IonList, IonTitle, IonToolbar} from '@ionic/angular';
import {CabeceraAtrasComponent} from "../../componentes/cabecera-atras/cabecera-atras.component";
import {EVENTOS_DETALLE} from "../../datos/eventos";
import {USUARIO_INSCRITOS} from "../../datos/usuarios";

@Component({
  selector: 'app-lista-asistencia-detalle',
  templateUrl: './lista-asistencia-detalle.page.html',
  styleUrls: ['./lista-asistencia-detalle.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, CabeceraAtrasComponent, IonList, IonItem, IonLabel]
})
export class ListaAsistenciaDetallePage implements OnInit {
  id = input<string>();
  evento = computed(() =>
    EVENTOS_DETALLE.find(e => e.id === Number(this.id()))
  );

  usuarios = USUARIO_INSCRITOS;

  constructor() { }

  ngOnInit() {
  }

}
