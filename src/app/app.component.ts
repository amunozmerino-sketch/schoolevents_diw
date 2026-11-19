import { register } from 'swiper/element/bundle';
import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular';
import {addIcons} from "ionicons";
import {
  homeSharp,
  imagesSharp,
  calendarSharp,
  personSharp,
  notificationsSharp,
  arrowForwardSharp,
  calendarNumberOutline,
  timeOutline,
  people,
  hourglassOutline,
  eyeOutline,
  heartOutline,
  optionsOutline,
  arrowBackOutline,
  flask,
  alertCircle,
  checkmarkCircle,
  warning,
  informationCircle,
  chevronForward,
  addOutline,
  image,
  cloudUploadOutline,
  ellipsisHorizontal,
  downloadOutline,
  close,
  checkmark,
  clipboardOutline,
  createOutline,
  pencil,
  trash,
  ban
} from "ionicons/icons";

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    addIcons({
      homeSharp,
      imagesSharp,
      calendarSharp,
      personSharp,
      notificationsSharp,
      arrowForwardSharp,
      calendarNumberOutline,
      timeOutline,
      people,
      hourglassOutline,
      eyeOutline,
      heartOutline,
      optionsOutline,
      arrowBackOutline,
      flask,
      alertCircle,
      checkmarkCircle,
      warning,
      informationCircle,
      chevronForward,
      addOutline,
      image,
      cloudUploadOutline,
      ellipsisHorizontal,
      downloadOutline,
      close,
      checkmark,
      clipboardOutline,
      createOutline,
      pencil,
      trash,
      ban
    });
  }
}
