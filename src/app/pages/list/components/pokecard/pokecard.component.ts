import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { IPokemon } from '../../../../def/pokemon';

@Component({
  selector: 'pok-pokecard',
  templateUrl: './pokecard.component.html',
  styleUrls: ['./pokecard.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class PokecardComponent implements OnInit {
  @Input()
  pokemon: IPokemon

  constructor() { }

  ngOnInit() {
  }

}
