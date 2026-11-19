import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonRouterLink,
  IonAvatar,
  IonIcon, IonToggle
} from '@ionic/angular';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, RouterLink, IonRouterLink, IonAvatar, IonIcon, IonToggle]
})
export class PerfilPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
