import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {RouterOutlet } from '@angular/router';
import { NavBarAboveComponent } from './navigation/nav-bar-above/nav-bar-above.component';
import { FooterComponent } from "./navigation/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavBarAboveComponent, FooterComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'makutaPay';
}
