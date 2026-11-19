import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonButton, IonContent, IonHeader, IonIcon, IonRouterLink, IonToolbar} from '@ionic/angular';
import {MIS_EVENTOS} from "../../datos/eventos";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-mis-eventos',
  templateUrl: './mis-eventos.page.html',
  styleUrls: ['./mis-eventos.page.scss'],
  imports: [IonContent, IonHeader, IonToolbar, CommonModule, FormsModule, IonIcon, IonButton, IonRouterLink, RouterLink]
})
export class MisEventosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  eventos = MIS_EVENTOS;
}
