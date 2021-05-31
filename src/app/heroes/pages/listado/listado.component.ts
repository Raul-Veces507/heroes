import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroeService } from '../../services/heroe.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [ `
  mat-card{
    margin-top: 20px
  }
  `
  ]
})
export class ListadoComponent implements OnInit {

  Heroes: Heroe [] = [];

  constructor(private heroeserv:HeroeService) { }

  ngOnInit(): void {

    this.heroeserv.getHeroes()
    .subscribe(resp=> this.Heroes=resp);
  }

}
