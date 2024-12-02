import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  imports: [],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  veicoli: string[];
  constructor(){
    this.veicoli = ["rsupa", "betoniera", "camion", "furgone", "carrucola", "gru", "Trapano", "scale", "b", "c"]
  }
}
