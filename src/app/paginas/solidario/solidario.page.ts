import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-solidario',
  templateUrl: './solidario.page.html',
  styleUrls: ['./solidario.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SolidarioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
