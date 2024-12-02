import { Component } from '@angular/core';
import { MacchinaComponent } from '../macchina/macchina.component';

@Component({
  selector: 'app-container',
  imports: [MacchinaComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  veicoli: string[];
  constructor(){
    this.veicoli = ["rsupa", "betoniera", "camion", "furgone", "carrucola", "gru", "Trapano", "scale", "b", "c"]
  }
}
