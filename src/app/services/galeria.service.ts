
import { Injectable, signal } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root',
})
export class GaleriaService {

  readonly fotos = signal<string[]>([]);

  constructor() {}

  async seleccionarFoto(): Promise<void> {
    try {
      const capturedPhoto = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Prompt
      });

      if (capturedPhoto.webPath) {
        this.fotos.update(fotos => [
          capturedPhoto.webPath!,
          ...fotos
        ]);
      }

    } catch (error) {
      console.log('El usuario canceló la selección o hubo un error', error);
    }
  }
}
