import {
  Component,
  Input,
  OnInit,
  EventEmitter,
  Output,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-modal-image',
  templateUrl: './modal-image.component.html',
  styleUrls: ['./modal-image.component.css'],
})
export class ModalImageComponent implements OnInit {
  url: string;
  private count = 0;
  @Input() images: string[];
  @Output() onClose = new EventEmitter();
  @HostListener('window:keyup.esc')
  onScape(): void {
    this.close();
  }
  constructor() {}

  ngOnInit(): void {
    this.setUrl();
  }
  next(): void {
    this.count++;
    if (this.isLastImage()) this.resetCount();
    this.setUrl();
  }
  previous(): void {
    this.count--;
    if (this.isFirstImage()) this.counToFinish();
    this.setUrl();
  }
  private setUrl() {
    this.url = this.images[this.count];
  }
  private isLastImage(): boolean {
    return this.count >= this.images.length;
  }
  private isFirstImage(): boolean {
    return this.count < 0;
  }
  private resetCount(): void {
    this.count = 0;
  }
  private counToFinish(): void {
    this.count = this.images.length - 1;
  }
  close() {
    this.onClose.emit();
  }
}
