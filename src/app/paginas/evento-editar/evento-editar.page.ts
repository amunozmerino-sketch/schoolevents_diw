import {Component, computed, input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonCheckbox,
  IonContent,
  IonIcon,
  IonInput,
  IonItem,
  IonList,
  IonSelect, IonSelectOption,
  IonTextarea
} from '@ionic/angular';
import {BotonAsistireComponent} from "../../componentes/boton-asistire/boton-asistire.component";
import {BotonMeInteresaComponent} from "../../componentes/boton-me-interesa/boton-me-interesa.component";
import {CabeceraAtrasComponent} from "../../componentes/cabecera-atras/cabecera-atras.component";
import {EVENTOS_DETALLE} from "../../datos/eventos";
import {CURSOS} from "../../datos/cursos";
import {Curso} from "../../modelos/curso";

@Component({
  selector: 'app-evento-editar',
  templateUrl: './evento-editar.page.html',
  styleUrls: ['./evento-editar.page.scss'],
  imports: [IonContent, CommonModule, FormsModule, BotonAsistireComponent, BotonMeInteresaComponent, CabeceraAtrasComponent, IonIcon, IonTextarea, IonInput, IonList, IonItem, IonButton, IonCheckbox, IonSelect, IonSelectOption]
})
export class EventoEditarPage implements OnInit {
  id = input<string>();
  evento = computed(() =>
    EVENTOS_DETALLE.find(e => e.id === Number(this.id()))
  );
  cursos = CURSOS;

  aFechaInput(fecha: string): string {
    const [dia, mes, ano] = fecha.split('/');
    return `${ano}-${mes.padStart(2, '0')}-${dia.padStart(2, '0')}`;
  }

  estaMarcado(curso: Curso, cursosEvento: Curso[]): boolean {
    return cursosEvento.some(c => c.id === curso.id);
  }

  constructor() { }

  ngOnInit() {
  }
}
