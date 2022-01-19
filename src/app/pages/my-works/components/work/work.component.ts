import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Work } from '../../my-works.component';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
})
export class WorkComponent implements OnInit {
  @Input() work: Work;
  @Output() onClick = new EventEmitter();
  isActiveTechnologies = false;
  constructor() {}

  ngOnInit(): void {}
  onImage() {
    const images = this.work.urls;
    this.onClick.emit(images);
  }
}
