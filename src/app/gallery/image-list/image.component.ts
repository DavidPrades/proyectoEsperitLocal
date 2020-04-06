import { Component, OnInit, Input } from '@angular/core';
import { Image } from 'src/app/models/image';


@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styles: [`
  a:hover{
   cursor: pointer;
  }
    img {
      margin-bottom: 20px;
      
  }
  
  img:hover {
      -webkit-box-shadow: 0px 1px 6px 1px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 1px 6px 1px rgba(0, 0, 0, 0.75);
      box-shadow: 0px 1px 6px 1px rgba(0, 0, 0, 0.75);
  }`
  ],
})
export class ImageComponent implements OnInit {
@Input() image: Image;
  constructor() { }

  ngOnInit(): void {
  }

}
