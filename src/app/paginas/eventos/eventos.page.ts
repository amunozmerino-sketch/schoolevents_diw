import {
  EVENTOS_ACADEMICO, EVENTOS_CIENCIA,
  EVENTOS_CULTURA,
  EVENTOS_DEPORTE,
  EVENTOS_OCIO,
  EVENTOS_RESUMEN,
  EVENTOS_SOLIDARIO
} from "../../datos/eventos";
import {Component, OnInit, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonSearchbar, IonRouterLink, IonIcon, IonButton, IonHeader, IonToolbar,
  IonButtons, IonModal, IonInput, IonChip, IonCheckbox, IonDatetime, IonDatetimeButton
} from '@ionic/angular';
import {RouterLink} from "@angular/router";
import {TarjetaEventoComponent} from "../../componentes/tarjeta-evento/tarjeta-evento.component";
import {CATEGORIAS} from "../../datos/categorias";
import {CURSOS} from "../../datos/cursos";
import {CarruselEventoComponent} from "../../componentes/carrusel-evento/carrusel-evento.component";
import {CarruselEncabezadoComponent} from "../../componentes/carrusel-encabezado/carrusel-encabezado.component";

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
  imports: [CommonModule, FormsModule, IonContent, IonSearchbar, IonRouterLink, RouterLink, IonIcon, IonButton, TarjetaEventoComponent, IonHeader, IonToolbar, IonButtons, IonModal, IonInput, IonChip, IonCheckbox, IonDatetime, IonDatetimeButton, CarruselEventoComponent, CarruselEncabezadoComponent]
})
export class EventosPage implements OnInit {
  eventos = EVENTOS_RESUMEN;
  eventosCiencia = EVENTOS_CIENCIA;
  eventosDeporte = EVENTOS_DEPORTE;
  eventosSolidario = EVENTOS_SOLIDARIO;
  eventosOcio = EVENTOS_OCIO;
  eventosCultura = EVENTOS_CULTURA;
  eventosAcademico = EVENTOS_ACADEMICO;
  categorias = CATEGORIAS;
  cursos = CURSOS;

  seleccionadas = signal<Set<number>>(new Set());

  estaSeleccionada(id: number) {
    return this.seleccionadas().has(id);
  }

  alternar(id: number) {
    this.seleccionadas.update(actual => {
      const nuevo = new Set(actual);
      nuevo.has(id) ? nuevo.delete(id) : nuevo.add(id);
      return nuevo;
    });
  }

  constructor() { }

  ngOnInit() {
  }

}
