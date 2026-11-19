import {Component, computed, input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonContent, IonIcon} from '@ionic/angular';
import {CabeceraAtrasComponent} from "../../componentes/cabecera-atras/cabecera-atras.component";
import {EVENTOS_DETALLE} from "../../datos/eventos";
import {BotonAsistireComponent} from "../../componentes/boton-asistire/boton-asistire.component";
import {BotonMeInteresaComponent} from "../../componentes/boton-me-interesa/boton-me-interesa.component";

@Component({
  selector: 'app-evento-detalle',
  templateUrl: './evento-detalle.page.html',
  styleUrls: ['./evento-detalle.page.scss'],
  imports: [IonContent, CommonModule, FormsModule, CabeceraAtrasComponent, BotonAsistireComponent, BotonMeInteresaComponent, IonIcon]
})
export class EventoDetallePage {
  id = input<string>();
  evento = computed(() =>
    EVENTOS_DETALLE.find(e => e.id === Number(this.id()))
  );
}
