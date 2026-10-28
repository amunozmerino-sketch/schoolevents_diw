import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-ciencia',
  templateUrl: './ciencia.page.html',
  styleUrls: ['./ciencia.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CienciaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
