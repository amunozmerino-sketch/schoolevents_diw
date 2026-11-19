import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonButton, IonContent, IonHeader, IonIcon, IonTitle, IonToolbar} from '@ionic/angular';
import {MIS_EVENTOS} from "../../datos/eventos";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-lista-asistencia',
  templateUrl: './lista-asistencia.page.html',
  styleUrls: ['./lista-asistencia.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonIcon, RouterLink]
})
export class ListaAsistenciaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  protected readonly eventos = MIS_EVENTOS;
}
