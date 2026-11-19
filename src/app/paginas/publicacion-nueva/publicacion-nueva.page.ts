import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonContent, IonHeader, IonIcon, IonTextarea, IonTitle, IonToolbar} from '@ionic/angular';
import {CabeceraAtrasComponent} from "../../componentes/cabecera-atras/cabecera-atras.component";
import {BotonCancelarComponent} from "../../componentes/boton-cancelar/boton-cancelar.component";
import {BotonGuardarComponent} from "../../componentes/boton-guardar/boton-guardar.component";

@Component({
  selector: 'app-publicacion-nueva',
  templateUrl: './publicacion-nueva.page.html',
  styleUrls: ['./publicacion-nueva.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, CabeceraAtrasComponent, IonIcon, IonTextarea, BotonCancelarComponent, BotonGuardarComponent]
})
export class PublicacionNuevaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
