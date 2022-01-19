import { Work } from './../my-works.component';
import { Injectable } from '@angular/core';

@Injectable()
export class WorksService {
  constructor() {}

  get works(): Promise<Work[]> {
    return fetch('assets/works.json')
      .then((result) => result.json())
      .then((works) => works);
  }
}
