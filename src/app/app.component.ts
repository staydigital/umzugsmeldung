import { Component } from '@angular/core';
import { Vn } from './model/vn';
import { Vertrag } from './model/vertrag';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  selectedVn: Vn;
  selectedVertrag: Vertrag;
  
  title = 'app';
}
