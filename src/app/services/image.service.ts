import { Injectable } from '@angular/core';
import { Image } from '../models/image';



@Injectable({
  providedIn: 'root'
})

@Injectable()
export class ImageService {
  images: Image[]=[
    new Image(1,"Ave volando", "Descripción Ave Volando", "..\\assets\\Esp3rit\\Ave_volando.jpg", "..\\assets\\Esp3rit\\Ave_volando.jpg"),
    new Image(2,"Botella flor", "Descripcion Botella Flow", "..\\assets\\Esp3rit\\Botella_flor.jpg", "..\\assets\\Esp3rit\\Botella_flor.jpg"),
    new Image(3,"Hombre_burbuja", "Descripcion Hombre_burbuja", "..\\assets\\Esp3rit\\Hombre_burbuja.jpg", "..\\assets\\Esp3rit\\Hombre_burbuja.jpg"),
    new Image(4,"Nino_goblos_agua", "Descripcion Nino_goblos_agua", "..\\assets\\Esp3rit\\Nino_goblos_agua.jpeg", "..\\assets\\Esp3rit\\Nino_goblos_agua.jpeg"),
    new Image(5,"Persona_tormenta", "Descripcion Persona_tormenta", "..\\assets\\Esp3rit\\Persona_tormenta.jpeg", "..\\assets\\Esp3rit\\Persona_tormenta.jpeg"),
    new Image(6,"Persona_volando", "Descripcion Persona_volando", "..\\assets\\Esp3rit\\Persona_volando.jpeg", "..\\assets\\Esp3rit\\Persona_volando.jpeg"),
    new Image(7,"Botella flor", "Descripcion Botella Flow", "..\\assets\\Esp3rit\\Botella_flor.jpg", "..\\assets\\Esp3rit\\Botella_flor.jpg"),
    new Image(8,"Botella flor", "Descripcion Botella Flow", "..\\assets\\Esp3rit\\Botella_flor.jpg", "..\\assets\\Esp3rit\\Botella_flor.jpg")
  ];
  constructor() {

   
   }
   getImages(){
    return this.images;
  }
}
