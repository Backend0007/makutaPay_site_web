import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  _currentYear: number = 0;

  constructor() {
    this._currentYear = new Date().getFullYear();
  }
  

}
