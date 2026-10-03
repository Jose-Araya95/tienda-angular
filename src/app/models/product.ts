/**
 * Interfaz que define la estructura del objeto obtenido de JSONPlaceholder.
 */
export interface Product {
  id: number;          // Identificador único
  title: string;       // Título del elemento
  url: string;         // URL de la imagen
  thumbnailUrl: string;// URL de la miniatura requerida por el HTML
}
