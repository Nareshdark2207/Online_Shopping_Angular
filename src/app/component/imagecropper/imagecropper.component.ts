import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

@Component({
  selector: 'app-imagecropper',
  templateUrl: './imagecropper.component.html',
  styleUrls: ['./imagecropper.component.css']
})
export class ImagecropperComponent implements OnInit {
  imageChangedEvent: any = '';
  croppedImage: any = '';
  constructor() { }

  ngOnInit(): void {
  }

  fileChangeEvent(event: any): void {
      this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
      this.croppedImage = event.base64;
  }
  imageLoaded() {
      // show cropper
  }
  cropperReady() {
      // cropper ready
  }
  loadImageFailed() {
      // show message
  }
}
