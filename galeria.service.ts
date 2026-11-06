import { Injectable, signal } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
  providedIn: 'root',
})
export class GaleriaService {
  readonly fotos = signal<string[]>([]);
  readonly mensajeError = signal<string | null>(null);

  async seleccionarImagenes(): Promise<void> {
    this.mensajeError.set(null);

    try {
      const resultado = await Camera.pickImages({
        quality: 90,
        limit: 0,
      });

      const nuevasFotos = resultado.photos
        .map((foto) => foto.webPath)
        .filter((ruta): ruta is string => Boolean(ruta));

      if (nuevasFotos.length > 0) {
        this.fotos.update((actuales) => [...nuevasFotos, ...actuales]);
      }
    } catch (error) {
      console.error('No se pudieron seleccionar las imágenes:', error);
      this.mensajeError.set('No se pudieron cargar las imágenes. Intentalo nuevamente.');
    }
  }

  async tomarFoto(): Promise<void> {
    this.mensajeError.set(null);

    try {
      const foto = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
      });

      if (foto.webPath) {
        this.fotos.update((actuales) => [foto.webPath!, ...actuales]);
      }
    } catch (error) {
      // Cerrar la cámara o cancelar la operación no debe generar un error visible.
      console.info('La captura fue cancelada o no pudo completarse.', error);
    }
  }

  eliminarFoto(fotoAEliminar: string): void {
    this.fotos.update((actuales) => actuales.filter((foto) => foto !== fotoAEliminar));
  }
}
