import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonContent, IonDatetime, IonHeader, IonIcon, IonTitle, IonToolbar} from '@ionic/angular';
import {EVENTOS_CALENDARIO} from "../../datos/eventos";

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonDatetime, IonIcon]
})
export class CalendarioPage implements OnInit {
  eventos = EVENTOS_CALENDARIO;

  constructor() { }

  ngOnInit() {
  }

}
