import { Component, OnInit, Input } from '@angular/core';
import { Image } from 'src/app/models/image';
import { ImageService } from 'src/app/services/image.service';



@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styles: [
  ],
})
export class ImageListComponent implements OnInit {

  
  images: Image[]=[];
  selectedImage: Image;
 
  constructor(private imageService:ImageService) { }

  ngOnInit(): void {
    this.images= this.imageService.getImages();
  }

  onSelect(image: Image){
    this.selectedImage=image;
  }

  

}
