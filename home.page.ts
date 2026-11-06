import { Component, computed, inject, signal } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
} from '@ionic/angular';
import { GaleriaService } from '../services/galeria.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class HomePage {
  readonly galeriaService = inject(GaleriaService);
  readonly fotoAmpliada = signal<string | null>(null);
  readonly cantidadFotos = computed(() => this.galeriaService.fotos().length);

  async seleccionarImagenes(): Promise<void> {
    await this.galeriaService.seleccionarImagenes();
  }

  async tomarFoto(): Promise<void> {
    await this.galeriaService.tomarFoto();
  }

  abrirFoto(foto: string): void {
    this.fotoAmpliada.set(foto);
  }

  cerrarFoto(): void {
    this.fotoAmpliada.set(null);
  }

  eliminarFoto(foto: string): void {
    this.galeriaService.eliminarFoto(foto);
    this.cerrarFoto();
  }
}
