import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonCheckbox,
  IonContent,
  IonHeader, IonIcon,
  IonInput,
  IonSelect,
  IonSelectOption, IonTextarea,
  IonTitle,
  IonToolbar
} from '@ionic/angular';
import {CabeceraAtrasComponent} from "../../componentes/cabecera-atras/cabecera-atras.component";
import {CURSOS} from "../../datos/cursos";

@Component({
  selector: 'app-evento-nuevo',
  templateUrl: './evento-nuevo.page.html',
  styleUrls: ['./evento-nuevo.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonSelectOption, IonSelect, IonCheckbox, IonInput, IonButton, IonIcon, IonTextarea, CabeceraAtrasComponent]
})
export class EventoNuevoPage implements OnInit {
  cursos = CURSOS;

  constructor() { }

  ngOnInit() {
  }

}
