import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-evento-nuevo',
  templateUrl: './evento-nuevo.page.html',
  styleUrls: ['./evento-nuevo.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class EventoNuevoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
