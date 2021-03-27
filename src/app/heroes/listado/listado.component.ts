import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán América']; 
  heroeBorrado: string | string[] = '';

  borrarHeroe() {
    this.heroeBorrado = this.heroes.shift() || '';
  }

  onChange( iHeroe:number ){
    this.heroeBorrado = this.heroes.splice(iHeroe, 1);
  }
}
