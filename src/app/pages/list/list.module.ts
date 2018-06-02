import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list.component';
import { ListRoutingModule } from './list-routing.module';
import { PokecardComponent } from './components/pokecard/pokecard.component'
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ListRoutingModule,
    SharedModule,
    RouterModule
  ],
  declarations: [ListComponent, PokecardComponent]
})
export class ListModule { }
