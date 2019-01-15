import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { tabsRoutes } from './tabs.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(tabsRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class TabsRoutingModule { }
