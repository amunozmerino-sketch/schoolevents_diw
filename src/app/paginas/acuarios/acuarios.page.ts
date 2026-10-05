import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-acuarios',
  templateUrl: './acuarios.page.html',
  styleUrls: ['./acuarios.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AcuariosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
