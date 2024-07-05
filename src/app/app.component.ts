import { NavbarComponent } from './layout/navbar/navbar.component';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  template: `
  <app-navbar />
    <router-outlet></router-outlet>
  `,
  styles: []
})

export class AppComponent {
  title = 'Ng17';
}

