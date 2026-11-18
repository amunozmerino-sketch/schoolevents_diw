import { EVENTOS_RESUMEN } from "../../datos/eventos";
import {Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, signal} from '@angular/core';
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

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, FormsModule, IonContent, IonSearchbar, IonRouterLink, RouterLink, IonIcon, IonButton, TarjetaEventoComponent, IonHeader, IonToolbar, IonButtons, IonModal, IonInput, IonChip, IonCheckbox, IonDatetime, IonDatetimeButton]
})
export class EventosPage implements OnInit {
  eventos = EVENTOS_RESUMEN;
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
