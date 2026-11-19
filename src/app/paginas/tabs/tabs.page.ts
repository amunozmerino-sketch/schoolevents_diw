import { Component, OnInit } from '@angular/core';
import {
  IonAvatar, IonButton, IonButtons,
  IonHeader,
  IonIcon,
  IonRouterLink,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonToolbar
} from '@ionic/angular';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  imports: [IonTabButton, IonIcon, IonTabBar, IonTabs, IonAvatar, IonHeader, IonToolbar, IonButtons, IonButton, IonRouterLink, RouterLink]
})
export class TabsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
