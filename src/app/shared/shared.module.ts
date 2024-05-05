import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobxAngularModule } from 'mobx-angular';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MobxAngularModule
  ],
  exports: [MobxAngularModule]
})
export class SharedModule { }
