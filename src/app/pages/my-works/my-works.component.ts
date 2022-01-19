import { WorksService } from './services/works.service';
import { Component } from '@angular/core';
export interface Work {
  image: string;
  urls: string[];
  externalLink?: string;
  technologies: string[];
}
@Component({
  selector: 'app-my-works',
  templateUrl: './my-works.component.html',
  styleUrls: ['./my-works.component.css'],
  providers: [WorksService],
})
export class MyWorksComponent {
  works: Work[] = [];
  selectedImages: string[] = [];

  constructor(private worksService: WorksService) {
    this.worksService.works.then((works) => {
      this.works = works;
    });
  }

  showModal(urls: string[]): void {
    this.selectedImages = urls;
  }
  resetSelectedImages(): void {
    this.selectedImages = [];
  }
}
