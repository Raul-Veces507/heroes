import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent implements OnInit {

  constructor( private activedrotes:ActivatedRoute) { }

  ngOnInit(): void {
this.activedrotes.params.subscribe( ( { id } ) =>console.log(id)); ///restructurar para solo obtener el id 
    
  }

}
