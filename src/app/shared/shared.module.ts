import { WordsBlastComponent } from './components/words-blast/words-blast.component';
import { HoverDirective } from './directives/hover.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HoverDirective, WordsBlastComponent],
  imports: [CommonModule],
  exports: [HoverDirective, WordsBlastComponent],
})
export class SharedModule {}
