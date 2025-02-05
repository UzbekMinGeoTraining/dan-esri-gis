import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MapComponent } from './map/map.component';

@Component({
  selector: 'app-components',
  imports: [HeaderComponent, MapComponent],
  templateUrl: './components.component.html',
  styleUrl: './components.component.scss',
})
export class ComponentsComponent {}
