import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';
import {CarruselGaleriaComponent} from "../../componentes/carrusel-galeria/carrusel-galeria.component";
import {CarruselEncabezadoComponent} from "../../componentes/carrusel-encabezado/carrusel-encabezado.component";
import {EVENTOS_GALERIA} from "../../datos/eventos";

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, CarruselGaleriaComponent, CarruselEncabezadoComponent]
})
export class GaleriaPage implements OnInit {
  eventos = EVENTOS_GALERIA;

  constructor() { }

  ngOnInit() {
  }

}
