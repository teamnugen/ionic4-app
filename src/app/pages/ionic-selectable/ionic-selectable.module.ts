import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicSelectableModule } from 'ionic-selectable';

import { IonicModule } from '@ionic/angular';

import { IonicSelectablePage } from './ionic-selectable.page';

const routes: Routes = [
  {
    path: '',
    component: IonicSelectablePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicSelectableModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IonicSelectablePage]
})
export class IonicSelectablePageModule {}
