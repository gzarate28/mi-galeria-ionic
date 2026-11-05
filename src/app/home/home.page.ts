
import { Component, inject } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton
} from '@ionic/angular';

import { GaleriaService } from '../services/galeria.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton
  ],
})
export class HomePage {

  public galeriaService = inject(GaleriaService);

  async tomarFoto(): Promise<void> {
    await this.galeriaService.seleccionarFoto();
  }
}
