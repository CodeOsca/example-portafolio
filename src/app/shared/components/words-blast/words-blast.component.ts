import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-words-blast',
  templateUrl: './words-blast.component.html',
  styleUrls: ['./words-blast.component.css'],
})
export class WordsBlastComponent implements OnInit, OnDestroy {
  @Input('words') inputWords = [''];
  arrayOfLetter: Array<string> = [];
  private words = '';
  private count = 0;
  private counter: any;
  constructor() {}

  parserLetterSpacing(letter: string): string {
    return letter !== ' ' ? letter : '&nbsp';
  }
  isLetterLine(letter: string): boolean {
    return letter === '\n';
  }
  ngOnInit(): void {
    if (this.inputWords.length > 0) {
      this.parserArray();
      this.counter = setInterval(() => this.pushOfLetterArray(), 100);
    }
  }
  private parserArray() {
    this.words = this.inputWords.join('\n');
  }
  private pushOfLetterArray = (): void => {
    const letter = this.words[this.count];
    this.arrayOfLetter.push(letter);
    this.count++;
    this.verifyCount();
  };
  private verifyCount(): void {
    if (this.count >= this.words.length) this.ngOnDestroy();
  }
  ngOnDestroy(): void {
    clearInterval(this.counter);
  }
}
