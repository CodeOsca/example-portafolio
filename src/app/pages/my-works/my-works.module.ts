import { SharedModule } from './../../shared/shared.module';
import { WorksRoutingModule } from './my-works.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyWorksComponent } from './my-works.component';
import { WorkComponent } from './components/work/work.component';
import { ModalImageComponent } from './components/modal-image/modal-image.component';

@NgModule({
  declarations: [MyWorksComponent, WorkComponent, ModalImageComponent],
  imports: [CommonModule, WorksRoutingModule, SharedModule],
})
export class MyWorksModule {}
