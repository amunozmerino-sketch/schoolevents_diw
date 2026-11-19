import {Component, computed, input, OnInit, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonAvatar,
  IonButton,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPopover,
  IonRouterLink
} from '@ionic/angular';
import {USUARIOS} from "../../datos/usuarios";
import {PUBLICACIONES} from "../../datos/publicaciones";
import {FOTOS_PUBLICACION} from "../../datos/fotos-publicacion";
import {CabeceraAtrasComponent} from "../../componentes/cabecera-atras/cabecera-atras.component";
import {EVENTOS_GALERIA} from "../../datos/eventos";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.page.html',
  styleUrls: ['./publicaciones.page.scss'],
  imports: [IonContent, CommonModule, FormsModule, CabeceraAtrasComponent, IonButton, IonIcon, IonAvatar, IonPopover, IonList, IonItem, IonLabel, IonRouterLink, RouterLink]
})
export class PublicacionesPage implements OnInit {
  id = input<string>();

  evento = computed(() =>
    EVENTOS_GALERIA.find(e => e.id === Number(this.id()))
  );

  usuarios = USUARIOS;
  publicaciones = PUBLICACIONES;
  fotos_publicacion = FOTOS_PUBLICACION;

  constructor() { }

  ngOnInit() {
  }

  menuAbierto = signal(false);
  eventoClic: Event | undefined;

  abrirMenu(ev: Event) {
    this.eventoClic = ev;
    this.menuAbierto.set(true);
  }

  descargar() {
    this.menuAbierto.set(false);
  }
}
