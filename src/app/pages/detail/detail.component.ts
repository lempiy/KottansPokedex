import { Component, OnInit, OnDestroy } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'pok-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit, OnDestroy {
  private _subs: Subscription[] = []
  displayed: string[] = ['stat.name', 'base_stat']
  constructor(private snap: ActivatedRoute, private service: PokemonService) { }

  ngOnInit() {
    const sub = this.snap.params.pipe(
      switchMap(params => {
        const id = +params.id
        return this.service.fetchDetails(id)
      })
    ).subscribe(isOk => {
      console.log('isOK', isOk, this.service.currentPokemonDetails)
    })
    this._subs.push(sub)
  }

  ngOnDestroy() {
    this._subs.forEach(sub => sub.unsubscribe())
  }
}
